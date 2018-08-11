import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router} from '@angular/router';

@Injectable()
export class HttpExceptionInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .do((response: HttpEvent<any>) => {
        
      })
      .catch((errorResponse, caught) => {
        this.router.navigateByUrl('/exception');
        return Observable.throw(new Error());
      }) as any;
  }
}
