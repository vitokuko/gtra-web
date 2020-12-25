import { Account } from './account';
import { Direction } from './direction';

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
        public direction?: Direction,
    ) {
    }
}
