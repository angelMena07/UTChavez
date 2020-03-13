
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// configuraremos nuestro módulo de aplicación con AngularFireModule y AngularFireAuthModule.
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './components/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ClasesComponent } from './containers/clases/clases.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoconferenciaComponent } from './components/videoconferencia/videoconferencia.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { RafavideosComponent } from './components/videosprofes/rafavideos/rafavideos.component';
// import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  HeaderComponent,
  NavbarComponent,
  DashboardComponent,
  ClasesComponent,
  VideosComponent,
  VideoconferenciaComponent,
  RafavideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot()

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
