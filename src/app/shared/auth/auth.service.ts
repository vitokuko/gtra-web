import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/';
  private serverDOWNLOAD = 'http://localhost:3000/';
  constructor(private _router: Router) { }

  isLoggedIn(): boolean {
    const token: string = this.getToken();
    return token && token.length > 0;
  }

  setAccount(account: Account) {
    const accountString = JSON.stringify(account);
    sessionStorage.setItem('currentAccount', accountString);
  }

  getCurrentAccount(): Account {
    const accountString = sessionStorage.getItem('currentAccount');
    if (!isNullOrUndefined(accountString)) {
      const account: Account = JSON.parse(accountString);
      return account;
    } else {
      return null;
    }
  }

  setAccountUtilisateur(utilisateur) {
    const utilisateurString = JSON.stringify(utilisateur);
    sessionStorage.setItem('currentUtilisateur', utilisateurString);
  }

  getCurrentUtilisateur() {
    const utilisateurString = sessionStorage.getItem('currentUtilisateur');
    if (!isNullOrUndefined(utilisateurString)) {
      const utilisateur = JSON.parse(utilisateurString);
      return utilisateur;
    } else {
      return null;
    }
  }

  setToken(token: string) {
    sessionStorage.setItem('accessToken', token);
  }

  getToken(): string {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      return token;
    } else {
      this.logout();
    }
  }

  // set and get roles
  setAccountRoles(role) {
    const accountRoles = [];
    const userRoles = [];
    role.forEach(r => {
      accountRoles.push(r.name);
      userRoles.push(r);
    });
    sessionStorage.setItem('accountRoles', JSON.stringify(accountRoles));
    sessionStorage.setItem('userRoles', JSON.stringify(userRoles));
  }

  getAccountRoles(): any {
    return JSON.parse(sessionStorage.getItem('accountRoles'));
  }

  getUserRoles(): any[] {
    return JSON.parse(sessionStorage.getItem('userRoles'));
  }

  // todo revoir le code pour gerer les details
  accountHasRole(roles: string[]): boolean {
    let find = false;
    let i = 0;
    while (!find && i < roles.length) {
      find = this.getAccountRoles().includes(roles[i]);
      i++;
    }
    return find;
  }

  redirect(complet) {
    this._router.navigate(['/home/' + complet]);
  }

  /**
   * ceci est utilisé pour effacer tout ce qui doit être enlevé
   */
  clear(): void {
    localStorage.clear();
  }

  logout(): void {
    this.clear();
    this._router.navigate(['/auth/login']);
  }

  decode() {
    return null;
    // return decode(localStorage.getItem('token'));
  }
}
