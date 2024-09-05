import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppConfigService } from './app-config.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private config: AppConfigService){
    console.log('AuthInterceptorService...');
    console.log(this.config.AuthToken);
  }

  intercept(httpRequest: HttpRequest<any>, nextRequest: HttpHandler): Observable<HttpEvent<any>> {
    
    const transformedRequest = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', `${this.config.AuthToken}`)
        
      });

    return nextRequest.handle(transformedRequest);
  }
}
