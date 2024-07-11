import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from 'src/app/services/service-auth.service';
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
  selector: 'app-admin-espace',
  templateUrl: './admin-espace.component.html',
  styleUrls: ['./admin-espace.component.css']
})
export class AdminEspaceComponent implements OnInit {
  data!: Circuit[]
  userData!: Users[]
  constructor(private serviceAuthService: ServiceAuthService,) {

  }
  ngOnInit(): void {
    this.serviceAuthService.getData('/circuits').then((data : Circuit[]) => {
      this.data = data.filter(
        (item) => item.statut === 'en attente'
      );
      
      

  })

}
accepter(data:Circuit){
  data.statut="validé"
  console.log(data)
  this.serviceAuthService.putData('/circuits/acceptCircuit/'+data._id, data).then((responce) => {
    console.log(responce)
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
