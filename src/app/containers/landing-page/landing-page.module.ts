import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from '../../components/landingPage/navbar/navbar.component';
import { SliderComponent } from '../../components/landingPage/slider/slider.component';
import { SectionsComponent } from '../../components/landingPage/sections/sections.component';


@NgModule({
  declarations: [LandingPageComponent,
  NavbarComponent,
  SliderComponent,
  SectionsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
