import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiaDeTallesRoutingModule } from './guia-de-talles-routing.module';
import { GuiaComponent } from './guia/guia.component';
import { TableComponent } from './pages/table/table.component';
import { TableBombComponent } from './pages/table.bomb/table.bomb.component';
//angular
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    GuiaComponent,
    TableComponent,
    TableBombComponent
  ],
  imports: [
    CommonModule,
    GuiaDeTallesRoutingModule,
    MatGridListModule
  ],
  exports:[
    TableComponent,
    TableBombComponent,
    CommonModule,
    GuiaDeTallesRoutingModule,
    MatGridListModule
  ]

})
export class GuiaDeTallesModule { }
