import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from './../../services/service-auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  registerForm: FormGroup<any> = new FormGroup({});
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private Router: Router,
    private serviceAuthService: ServiceAuthService) { }
  ngOnInit(): void {

    this.registerForm = this.fb.group({
      nom: [null, Validators.required],
      prenom: [null],
      telephone: [null, Validators.required],
      adresse: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required]],
      role: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    });
  }
  register() {
    console.log("azeazeaz");

    console.log("form", this.registerForm.value);
    this.serviceAuthService.postData('/auth/register', this.registerForm.value).then((responce) => {
      console.log("responce", responce);
      this.Router.navigate(['/connexion']);
    })

  }
}
