import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.css']
})
export class BookmarkedComponent implements OnInit {

  public galleryType: string;

  constructor() {
    console.log('bookmarked component');
    this.galleryType = "bookmarked";

   }

  ngOnInit(): void {
    console.log('bookmarked component init');

  }

}
