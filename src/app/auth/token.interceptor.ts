import {Injectable} from "@angular/core";
import {
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        'SuperSecretUserAuthenticationHeader': `${sessionStorage.getItem('idToken')}`
      }
    });

    return next.handle(req);
  }


}
