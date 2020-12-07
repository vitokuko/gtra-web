import { Role } from './role';
import { Utilisateur } from './utilisateur';

export class Account {
    constructor(
        public id?: string,
        public disabled?: boolean,
        public username?: string,
        public password?: string,
        public email?: string,
        public lastLogin?: Date,
        public roles?: Role[],
        public utilisateurId?: string,
        public utilisateur?: Utilisateur,
        public roleMappings?: Array<any>,
    ) {
    }
}
