import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public galleryType: string;
  public searchString: string;

  constructor() {
    this.galleryType = "bySearch";
   }

  ngOnInit(): void {
  }

}
