import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { LoginComponent } from './components/login/login.component';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddCircuitComponent } from './components/circuits/addcircuit/add-circuit.component';
import { EditCircuitComponent } from './components/circuits/edit-circuit/edit-circuit.component';
import { CircuitDetailsComponent } from './components/circuits/circuit-details/circuit-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminEspaceComponent } from './components/admin-espace/admin-espace.component';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { EspaceAgenceComponent } from './components/espace-agence/espace-agence.component';
import { CardComponent } from './components/card/card.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ServiceAuthService } from './services/service-auth.service'; // Import your service if needed
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CircuitsComponent,
    LoginComponent,
    InscrireComponent,
    ContactComponent,
    AddCircuitComponent,
    EditCircuitComponent,
    CircuitDetailsComponent,
    AdminEspaceComponent,
    EspaceClientComponent,
    EspaceAgenceComponent,
    CardComponent
  ],
  imports: [
    DialogModule,
    ButtonModule,
    TableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [ServiceAuthService ],
  schemas: [NO_ERRORS_SCHEMA],

  bootstrap: [AppComponent],

})
export class AppModule { }
