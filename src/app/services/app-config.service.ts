import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  //Will be overridden by appConfig.js
  public searchUrl = '';
  public bookemarkedReposUrl = '';
  public bookmarkUrl = '';
  public AuthToken = '';
  //Whether or not to enable debug mode
  public enableDebug = true;

  constructor() { }
}
