import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { BookmarkService } from './services/bookmark.service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BookmarkedComponent } from './components/bookmarked/bookmarked.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryGridComponent } from './components/gallery-grid/gallery-grid.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { SearchComponent } from './components/search/search.component';
import { AppConfigServiceProvider } from './services/app-config.service.provider';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    BookmarkedComponent,
    GalleryGridComponent,
    SearchComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,

    // Material
    MatTabsModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [SearchService, BookmarkService, AppConfigServiceProvider, 
    { provide : HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
