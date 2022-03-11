import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CashierindukComponent} from "./cashierinduk/cashierinduk.component";

const routes: Routes = [
  {
    path:'cashierinduk' , component:CashierindukComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
