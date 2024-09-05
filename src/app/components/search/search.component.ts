import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formdata: any;
  public galleryType: string;
  public searchString: string;
  search: any;

  constructor(private formBuilder: FormBuilder) {
    this.galleryType = "bySerach";
    this.searchString = null;
   }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.formdata?.valid) {
      //console.log(this.formdata.value);
      //console.log(this.formdata.value['search']);
      this.searchString = this.formdata.value['search'];
      this.galleryType = "bySerach";

      console.log(this.searchString);
      //window.location.reload();
    }
  }

}
