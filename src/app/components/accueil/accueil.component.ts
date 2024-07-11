import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from 'src/app/services/service-auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public userId: string = '';
  public role: string = '';
  public token: string | null | undefined;
  espace = {
    name: 'espace_',
    role: ''
  };
  constructor(
    private serviceAuthService: ServiceAuthService,
    private userStore: UserStoreService
  ) {}
  ngOnInit(): void {
    this.getId();
    this.getRole();
    this.espace.role=this.role;
    this.getToken()
  }
  getId() {
    this.userStore.getIdFromStore().subscribe((id) => {
      let userIdFromToken = this.serviceAuthService.getIdFromToken();
      this.userId = id || userIdFromToken;
    });
  }
  getRole() {
    this.userStore.getRoleFromStore().subscribe((role) => {
      let userRoleFromToken = this.serviceAuthService.getRoleFromToken();
      this.role = role || userRoleFromToken;
    });
  }
  getToken(){
    this.token=this.serviceAuthService.getToken();
    console.log(this.token)
  }
  async logOut() {
    this.serviceAuthService.signOut()
  }
}
