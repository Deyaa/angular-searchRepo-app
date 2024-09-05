import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookmarkedComponent } from './components/bookmarked/bookmarked.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "bookmarked", component: BookmarkedComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
