// @ts-ignore
import {RouterModule, Routes} from '@angular/router';
// @ts-ignore
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageMotDePasseOublierComponent } from './page-mot-de-passe-oublier/page-mot-de-passe-oublier.component';

const AUTH_ROUTES: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'pageInscription',
        component: PageInscriptionComponent,
      },
      {
        path: 'pageMotDePasseOublier',
        component: PageMotDePasseOublierComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
