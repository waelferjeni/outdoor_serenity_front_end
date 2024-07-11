import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceAuthService } from './../../services/service-auth.service'
import { UserStoreService } from 'src/app/services/user-store.service';

interface Card {
  id: number;
  image: string;
  titre: string;
  prix: number;
  destination: string;
  duree: string;
  statut:string
};

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent implements OnInit {


  public userId: string = '';
  public role: string = '';
  public token: string | null | undefined;
  cards: Card[] = []
  cardsBeforeFilter: Card[] = []
  filterForm: FormGroup;
  constructor(private serviceAuthService: ServiceAuthService,private userStore: UserStoreService) {

    this.filterForm = new FormGroup({
      searchValue: new FormControl(''),
    });
  
  }
  ngOnInit(): void {
    this.serviceAuthService.getData('/circuits').then((data:Card []) => {
      this.cards = data.filter(
        (item) => item.statut === 'validé'
      );
      this.cardsBeforeFilter=data;
      console.log(data)
      
    })
    this.getId();
    this.getRole();
    console.log(this.userId)
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
  applyFilter() {
    const searchKey = this.filterForm.value.searchValue.trim().toUpperCase();

    if (searchKey !== '') {
      console.log(searchKey);
      this.cards = this.cardsBeforeFilter.filter((card) => {
        const titre = card.titre.toUpperCase();
        return titre.includes(searchKey);
      });
    } else {
      this.cards = this.cardsBeforeFilter;
    }
  }


}

