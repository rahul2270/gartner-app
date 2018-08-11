import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class GartnerHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loadingContainer: HTMLElement = document.getElementsByClassName('loading-indicator').item(0) as HTMLElement;
        if (loadingContainer) { 
            loadingContainer.style.display = 'block'; 
        }
        let request = req.clone();
        const bearer = 'Bearer ' + environment.access_token;
        request = req.clone({ headers: req.headers.set('Authorization', bearer).set('Content-type', 'application/json') });
        return next.handle(request)
            .catch((error, caught) => {
                if (loadingContainer) { 
                    loadingContainer.style.display = 'none'; 
                }
                return Observable.throw(error);
            })
            .do((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (loadingContainer) { 
                        loadingContainer.style.display = 'none'; 
                    }
                }
            });
    }
}
