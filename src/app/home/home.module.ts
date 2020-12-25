import { FormsModule } from '@angular/forms';
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
import { RoleComponent } from './role/role.component';
import { MarqueVehiculeComponent } from './configuration/marque-vehicule/marque-vehicule.component';
import { ModeleVehiculeComponent } from './configuration/modele-vehicule/modele-vehicule.component';
import { ParkingVehiculeComponent } from './configuration/parking-vehicule/parking-vehicule.component';
import { DirectionVehiculeComponent } from './configuration/direction-vehicule/direction-vehicule.component';
import { DepannageVehiculeComponent } from './configuration/depannage-vehicule/depannage-vehicule.component';
import { DossierTravailVehiculeComponent } from './configuration/dossier-travail-vehicule/dossier-travail-vehicule.component';
import { FournisseurVehiculeComponent } from './configuration/fournisseur-vehicule/fournisseur-vehicule.component';
import { CapexVehiculeComponent } from './comptabilite/capex-vehicule/capex-vehicule.component';
import { OpexVehiculeComponent } from './comptabilite/opex-vehicule/opex-vehicule.component';
import { ModifierVehiculeComponent } from './modifier-vehicule/modifier-vehicule.component';
import { ModifierClientComponent } from './client/modifier-client/modifier-client.component';
import { ModifierAdminComponent } from './admin/modifier-admin/modifier-admin.component';
import { ModifierRoleComponent } from './role/modifier-role/modifier-role.component';
import { ConsulterAttributionClientComponent } from './gestion-clients/consulter-attribution-client/consulter-attribution-client.component';
import { ConsulterTicketClientComponent } from './gestion-clients/consulter-ticket-client/consulter-ticket-client.component';



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
    RoleComponent,
    MarqueVehiculeComponent,
    ModeleVehiculeComponent,
    ParkingVehiculeComponent,
    DirectionVehiculeComponent,
    DepannageVehiculeComponent,
    DossierTravailVehiculeComponent,
    FournisseurVehiculeComponent,
    CapexVehiculeComponent,
    OpexVehiculeComponent,
    ModifierVehiculeComponent,
    ModifierClientComponent,
    ModifierAdminComponent,
    ModifierRoleComponent,
    ConsulterAttributionClientComponent,
    ConsulterTicketClientComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
