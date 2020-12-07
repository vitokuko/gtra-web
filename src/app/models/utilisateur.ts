import { Account } from './account';

export class Utilisateur {
    constructor(
        public id?: string,
        public nom?: string,
        public prenom?: string,
        public telephone?: string,
        public statut?: string,
        public actif?: boolean,
        public accounts?: Account,
        public directionId?: string,
    ) {
    }
}
