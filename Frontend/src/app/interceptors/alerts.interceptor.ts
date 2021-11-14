import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Injectable()
export class AlertsInterceptor implements HttpInterceptor {

  constructor( private alertservice:AlertService)  {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(            
      catchError((error : HttpErrorResponse) => {   
        
          this.alertservice.showHttpError(error);
        return throwError(error);
      })
    );

  }
}
