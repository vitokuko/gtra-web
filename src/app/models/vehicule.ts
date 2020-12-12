import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';
import { Parking } from './parking';
import { Marque } from './marque';
import { Modele } from './modele';
import { Direction } from './direction';

export class Vehicule {
    constructor(
        public id?: string,
        public immatriculation?: string,
        public dateDeMiseenCirculation?: Date,
        public nombrePlace?: number,
        public amortissement?: number,
        public ancienneteMois?: number,
        public ancienneteAnnee?: number,
        public etat?: string,
        public visiteTechnique?: Date,
        public puissance: number,
        public categorieId?: string,
        public utilisateurId?: string,
        public parkingId?: string,
        public marqueId?: string,
        public modeleId?: string,
        public directionId?: string,
        public utilisateur?: Utilisateur,
        public categorie?: Categorie,
        public parking?: Parking,

    ) {
    }
}
