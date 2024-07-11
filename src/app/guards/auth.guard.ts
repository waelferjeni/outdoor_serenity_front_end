import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceAuthService } from '../services/service-auth.service'
//import { NgToastComponent, NgToastService } from 'ng-angular-popup';
//import { TYPE } from 'src/assets/values.constants';
//import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private auth: ServiceAuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
    //   Swal.fire({
    //     toast: true,
    //     position: 'top',
    //     showConfirmButton: false,
    //     icon: TYPE.ERROR,
    //     timerProgressBar: false,
    //     timer: 5000,
    //     title: 'Please Login First',
    //   });
      alert("Please Login First")
      this.router.navigate(['connexion']);
      return false;
    }
  }
}