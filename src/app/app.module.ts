import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';
import { AuthComponent } from './auth/auth.component';
import {AuthModule} from './auth/auth.module';
import {DataService} from './shared/data/data.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './shared/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added,
  ],
  providers: [
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
