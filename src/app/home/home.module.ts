import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketClientComponent } from './ticket-client/ticket-client.component';
import { TicketAdminComponent } from './ticket-admin/ticket-admin.component';
import { GestionClientsComponent } from './gestion-clients/gestion-clients.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';
import { AllocationVehiculeComponent } from './allocation-vehicule/allocation-vehicule.component';
import { DemandeAllocationComponent } from './demande-allocation/demande-allocation.component';
import { GestionAttributionComponent } from './gestion-attribution/gestion-attribution.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CategorieVehiculeComponent } from './configuration/categorie-vehicule/categorie-vehicule.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AccueilComponent,
    UtilisateurComponent,
    ClientComponent,
    AdminComponent,
    ListVehiculeComponent,
    AddVehiculeComponent,
    TicketListComponent,
    TicketEditComponent,
    TicketDetailsComponent,
    TicketClientComponent,
    TicketAdminComponent,
    GestionClientsComponent,
    GestionVehiculesComponent,
    AllocationVehiculeComponent,
    DemandeAllocationComponent,
    GestionAttributionComponent,
    StatistiquesComponent,
    ComptabiliteComponent,
    ConfigurationComponent,
    CategorieVehiculeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
