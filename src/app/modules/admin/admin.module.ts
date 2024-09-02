import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
//componente
import { TableComponent } from './components/table/table.component';
//vista
import { AdminComponent } from './pages/admin/admin.component';

//paqueteria para formularios y formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//material
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TableComponent,
    AdminComponent

  ],
  imports: [
    CommonModule,
   AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    TableComponent,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AdminModule { }
