import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { HomeComponent } from './components/home/home.component';


const APPROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'tabla', component: TablaComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( APPROUTES);
