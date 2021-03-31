import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'app/access/services/auth.service';
import { NotificationService } from 'app/shared/services/notification.service';

@Injectable({
    providedIn: 'root'
  })
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private _authService: AuthService, private _notificationService: NotificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            catchError(err => {

                if (!navigator.onLine || [0, -1].indexOf(err.status) !== -1) {
                    this._notificationService.notifyOnline(false);
                } else if ([401, 403].indexOf(err.status) !== -1) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    this._authService.logout();
                    location.reload(true);
                }

                return throwError(err);
            })
        );
    }
}