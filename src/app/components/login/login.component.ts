import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from './../../services/service-auth.service'
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signInForm: FormGroup<any> = new FormGroup({});
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private Router: Router,
    private serviceAuthService: ServiceAuthService,private userStore: UserStoreService) { }
  ngOnInit(): void {

    this.signInForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, [Validators.required]],
    });
  }
  signIn() {
    this.serviceAuthService.postData('/auth/login', this.signInForm.value).then((responce) => {
      console.log("", responce.token);
      this.serviceAuthService.storeToken(responce.token);

      const tokenPayLoad = this.serviceAuthService.decodedToken();
          this.userStore.setIdForStore(tokenPayLoad.nameid);
          this.userStore.setRoleForStore(tokenPayLoad.role);
          console.log(tokenPayLoad)

          if(tokenPayLoad.role=="admin"){
            this.Router.navigate(['/espace_admin']);
          }
          else if(tokenPayLoad.role=="agence"){
            this.Router.navigate(['/espace_agence']);
          }
          else{
            this.Router.navigate(['/espace_client']);
          }
     
    })

  }
}
