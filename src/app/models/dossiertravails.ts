import { Vehicule } from './vehicule';
import { Utilisateur } from './utilisateur';


export class DossierTravails {
    constructor(
        public id?: string,
        public kilometrage?: number,
        public motifDemande?: string,
        public disponibiliteVehicule?: string,
        public descriptionSommaire?: string,
        public naturePrestation?: string,
        public coutPrestation?: string,
        public nomFournisseur?: number,
        public numeroDA?: number,
        public numeroBonCommande?: number,
        public dateNotificationFournisseur?: Date,
        public dateFinTravaux?: Date,
        public dateLivraison?: Date,
        public dateImmobilisation?: Date,
        public vehiculeId?: string,
        public utilisateurId?: string,
        public utilisateur?: Utilisateur,
        public vehicule?: Vehicule,


    ) {
    }
}
