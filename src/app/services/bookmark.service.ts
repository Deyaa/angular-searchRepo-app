import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { BookmarkRepo } from '../models/bookmark-repo.model';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private bookmarkApiAddress;
  private bookemarkedReposAddress;
  // לשרת מרוחק ולהביא מידע AJAX אובייקט המסוגל לבצע גלישת httpClient
  constructor(private httpClient: HttpClient, private config: AppConfigService) { 
    this.bookmarkApiAddress = config.bookmarkUrl;
    this.bookemarkedReposAddress = config.bookemarkedReposUrl;
    if(config.enableDebug){
      console.log('Bookmark repo api address: ' + this.bookmarkApiAddress);
      console.log('Bookmarked repos api address: ' + this.bookemarkedReposAddress);
    }
  }

    public bookmarkRepositoryAsync(bookmarkRepo: BookmarkRepo): Observable<BookmarkRepo> {
      if(this.config.enableDebug){
        console.log('in service');
        console.log(bookmarkRepo);
      }

      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      
      return this.httpClient.post<BookmarkRepo>(this.bookmarkApiAddress, bookmarkRepo, httpOptions)
          .pipe();
    }

    public getBookmarkRepositoriesAsync(): Observable<BookmarkRepo[]> {
      if(this.config.enableDebug){
        console.log('in service');
        console.log('getBookmarkRepositoriesAsync');
      }

        return this.httpClient.get<BookmarkRepo[]>(this.bookemarkedReposAddress)
            .pipe(
                map((bookmarkRepos: BookmarkRepo[]) => {
                    console.log(bookmarkRepos);
                    return bookmarkRepos;
                }));
    }
}
