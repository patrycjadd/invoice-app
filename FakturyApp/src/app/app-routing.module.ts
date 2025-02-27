import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaFakturComponent} from "./lista-faktur/lista-faktur.component";
import {NowaFakturaComponent} from "./nowa-faktura/nowa-faktura.component";
import {PodgladFakturyComponent} from "./podglad-faktury/podglad-faktury.component";
import {SprzedawcaComponent} from "./sprzedawca/sprzedawca.component";

const routes: Routes = [
  { path: '', component: ListaFakturComponent },
  { path: 'faktura', component: NowaFakturaComponent },
  { path: 'faktura/:id', component: PodgladFakturyComponent },
  { path: 'sprzedawca/edit', component: SprzedawcaComponent },
  { path: 'sprzedawca/view', component: SprzedawcaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
