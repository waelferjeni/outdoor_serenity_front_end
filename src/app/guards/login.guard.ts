import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';
// import { NgToastService } from 'ng-angular-popup';
// import { Observable } from 'rxjs';
// import { AuthService } from '../Services/auth.service';
// import { TYPE } from 'src/assets/values.constants';
// import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
   constructor(private serviceAuthService: ServiceAuthService, private router: Router) {}
   canActivate(): boolean {
     if (this.serviceAuthService.isLoggedIn()) {
     
      this.router.navigate(['']);
      return false;
   } else {
     return true;
    }
  }
}