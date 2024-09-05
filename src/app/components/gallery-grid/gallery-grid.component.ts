import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { BookmarkRepo } from 'src/app/models/bookmark-repo.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { SearchService } from 'src/app/services/search.service';

export interface Tile {
  avatarOwner: string;
  repoName: string;
  identityId: string;
 }

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.css']
})
export class GalleryGridComponent implements OnInit {

    //this field data will be coming from parent's data. It receives the data before calling the ngOnInit() method
    @Input() galleryType: string;
    @Input() searchString: string;
    
    isVisible: boolean;
    isBookmarkBtnVisible: boolean;
    formdata: any;
    tiles: Tile[] = [];

  private subscription: Subscription;

  constructor(private searchService: SearchService, private bookmarkService: BookmarkService, 
    private formBuilder: FormBuilder
  ) { 
    this.galleryType = "bySerach";
    this.searchString = null;
  }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      search: ['', Validators.required]
    });

    if(this.galleryType == 'bookmarked'){
      this.isVisible = false;
      this.isBookmarkBtnVisible = false;
    } else {
      this.isVisible = true;
      this.isBookmarkBtnVisible = true;
    }

    switch (this.galleryType) {
      case "bookmarked":
        this.subscription = this.bookmarkService
          .getBookmarkRepositoriesAsync()
          .subscribe((data: any) => {
            this.tiles = data;
          });
        break;
      case "bySearch":
        this.search(this.searchString);
      default:
        this.subscription = this.searchService
          .getGalleryItemsBySearchAsync(null)
          .subscribe((data: any) => {
            this.tiles = data;
          });
        break;
    }
  }

  submitForm(): void {
    if (this.formdata?.valid) {
      this.searchString = this.formdata.value['search'];
      this.galleryType = "bySerach";
      this.search(this.searchString);
    }
  }

  enterSubmit(event, form): void{
    if (event.keyCode === 13) {
      this.submitForm();
    }
  }

  search(searchStr: string): void{
    this.subscription = this.searchService
      .getGalleryItemsBySearchAsync(searchStr)
      .subscribe((data: any) => {
        this.tiles = data;
      });
  }

  bookmarkItem(element: BookmarkRepo): void {
    console.log('bookmarkItem');
    console.log(element);
    this.subscription = this.bookmarkService.bookmarkRepositoryAsync(element).subscribe();
    //window.location.reload();
  }

  // פונקציה המופעלת אוטומטית ברגע שהרכיב נהרס
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // בכדי שיפסיק להאזין Observable-שחרור ה
  }

}
