import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from 'src/app/services/service-auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
interface Reservation {
  titre: string;
  description: string;
  lieuDedepart: string;
  destination: string;
  dateDebut: string;
  duree: number;
  mantantPayee: number;
}
@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  public userId: string = '';
  public role: string = '';
  public token: string | null | undefined;
  espace = {
    name: 'espace_',
    role: ''
  };
  data: Reservation[]
  constructor(private serviceAuthService: ServiceAuthService,
    private userStore: UserStoreService) {
    this.data = [{
      titre: "zaghouan",
      description: "zaeaeaze",
      lieuDedepart: "Tnis",
      destination: "zaghouan",
      dateDebut: "10/11/1998",
      duree: 8,
      mantantPayee: 20,
    }];
  }
  ngOnInit(): void {
    this.getId();
    this.getRole();
    this.espace.role=this.role;
    this.getToken()
    console.log(this.role)
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
    console.log(this.token!=null)
  }
}
