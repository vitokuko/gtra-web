import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PageMotDePasseOublierComponent } from './page-mot-de-passe-oublier/page-mot-de-passe-oublier.component';

@NgModule({
  declarations: [LoginComponent, PageMotDePasseOublierComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
