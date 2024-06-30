import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiaComponent } from './guia/guia.component';

const routes: Routes = [
  {
    path:"guia",component:GuiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiaDeTallesRoutingModule { }
