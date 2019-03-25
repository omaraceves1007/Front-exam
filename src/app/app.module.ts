import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTES } from './app.routes';
import { EquipoService } from './services/equipo.service';
import { UsuarioService } from './services/usuario.service';
import { ClienteService } from './services/cliente.service';

import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipoComponent,
    UsuarioComponent,
    ClienteComponent,
    TablaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EquipoService,
    UsuarioService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
