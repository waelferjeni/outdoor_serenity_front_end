import { Component, Inject, OnInit } from '@angular/core';
import { ServiceAuthService } from 'src/app/services/service-auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EditCircuitComponent } from '../circuits/edit-circuit/edit-circuit.component';
interface Circuit {
  _id:string;
  titre: string;
  description: string;
  lieuDedepart: string;
  destination: string;
  dateDebut: string;
  duree: number;
  prix: number;
  circuit_image: string;
  trancheDage: number;
  agence:any;
  statut:string
}
interface Users {
  nom: string;
  prenom: string;
  email: string;
  role: string;
  motsdepass: string;
  adress: string;
  telephone: number;

}
@Component({
  selector: 'app-espace-agence',
  templateUrl: './espace-agence.component.html',
  styleUrls: ['./espace-agence.component.css']
})
export class EspaceAgenceComponent implements OnInit {
  public userId: string = '';
  public role: string = '';
  public token: string | null | undefined;
  espace = {
    name: 'espace_',
    role: ''
  };
  id= {
    _id:''
  }
  data: Circuit[]=[]
  BuyDialog: boolean = false;
  constructor(private serviceAuthService: ServiceAuthService,
    private userStore: UserStoreService,private dialogRef: MatDialog) {
  }
  ngOnInit(): void {
    this.getId();
    this.getRole();
    this.espace.role=this.role;
    this.getToken()
    this.serviceAuthService.getCircuitsByAgenceId(this.userId).then((data: Circuit []) => {
      this.data=data
    })
    
  }
  appearBuyDialog() {
    this.BuyDialog = true
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
  editDialog(circuit: Circuit){
    this.dialogRef.open(EditCircuitComponent, {
      data: circuit,
      width: '50vw',
      height: '80vh',
      id: 'editCircuit',
    });
  }
  deleteCircuit(id: string): void {
    this.serviceAuthService.deleteCircuitById(id).then(() => {
      console.log('Circuit deleted successfully');
      // Refresh the list of circuits or remove the deleted circuit from the cards array
      this.data = this.data.filter(circuit => circuit._id !== id);
    }).catch(error => {
      console.error('Error deleting circuit:', error);
    });
  }
}
