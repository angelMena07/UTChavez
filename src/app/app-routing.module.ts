import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ClasesComponent } from './containers/clases/clases.component';


// Declaracion de las rutas
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'clases', component: ClasesComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, SidebarComponent, FooterComponent, HeaderComponent, HomeComponent, NavbarComponent];
