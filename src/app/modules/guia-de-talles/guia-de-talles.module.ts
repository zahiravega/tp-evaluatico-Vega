import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiaDeTallesRoutingModule } from './guia-de-talles-routing.module';
import { GuiaComponent } from './guia/guia.component';


@NgModule({
  declarations: [
    GuiaComponent
  ],
  imports: [
    CommonModule,
    GuiaDeTallesRoutingModule
  ]
})
export class GuiaDeTallesModule { }
