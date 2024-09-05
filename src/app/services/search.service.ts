import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Gallery } from '../models/gallery.model';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    private searchApiAddress;
    // לשרת מרוחק ולהביא מידע AJAX אובייקט המסוגל לבצע גלישת httpClient
    constructor(private httpClient: HttpClient, private config: AppConfigService) { 
      this.searchApiAddress = config.searchUrl;
      if(config.enableDebug){
        console.log('Search api address: ' + this.searchApiAddress);
      }
    }

    public getGalleryItemsBySearchAsync(q: string): Observable<Gallery[]> {
        return this.httpClient.get<Gallery[]>(this.searchApiAddress + q)
            .pipe(
                map((items: Gallery[]) => {
                    console.log(items);
                    return items;
                }));
    }
}
