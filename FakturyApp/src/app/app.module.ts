import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {ListaFakturComponent} from './lista-faktur/lista-faktur.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NowaFakturaComponent} from './nowa-faktura/nowa-faktura.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {PodgladFakturyComponent} from './podglad-faktury/podglad-faktury.component';
import {SprzedawcaComponent} from './sprzedawca/sprzedawca.component';
import {HasRoleDirective} from './autoryzacja/has-role.directive';
import { MatIconModule } from '@angular/material/icon';
import { PodsumowanieComponent } from './podsumowanie/podsumowanie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ListaFakturComponent,
    NowaFakturaComponent,
    PodgladFakturyComponent,
    SprzedawcaComponent,
    HasRoleDirective,
    PodsumowanieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
