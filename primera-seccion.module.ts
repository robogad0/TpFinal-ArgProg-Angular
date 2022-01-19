import { InfoPersonalComponent } from './../info-personal/info-personal.component';
import { FotoBannerComponent } from './../foto-banner/foto-banner.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    HeaderComponent, 
    FotoBannerComponent,
    InfoPersonalComponent
    
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeraSeccionModule { }
