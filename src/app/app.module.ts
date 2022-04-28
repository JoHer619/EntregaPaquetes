import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { EnvioPaquetesComponent } from './components/envio-paquetes/envio-paquetes.component';
import { HistorialEnviosComponent } from './components/historial-envios/historial-envios.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NavbarComponent,
    TrackingComponent,
    EnvioPaquetesComponent,
    HistorialEnviosComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    LoginComponent,
    RegistroUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
