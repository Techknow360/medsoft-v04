import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({


    })

    return next.handle(request).pipe(tap(() => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 403 || err.status === 400 || err.status === 401) {
          if (err.status === 401) {
          }
          return;
        } else if (err.status === 503) {
          this.router.navigate(['undermaintenance']);
        } else if (err.status === 600) {
        } 
      }
    }
    ));    
  }
}
