import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Sprzedawca} from "../model/sprzedawca.model";
import {Role} from '../autoryzacja/auth.service';
import {Faktura} from "../model/faktura.model";
import {
  COLUMNS,
  FAKTURY_LOCAL_STORAGE_KEY,
  SPRZEDAWCY,
  SPRZEDAWCY_LOCAL_STORAGE_KEY,
  URL_FAKTURA
} from '../common/constants';


@Component({
  selector: 'app-lista-faktur',
  templateUrl: './lista-faktur.component.html',
  styleUrls: ['./lista-faktur.component.scss']
})
export class ListaFakturComponent implements OnInit {

  private _fakturyLista = JSON.parse(<string>localStorage.getItem(FAKTURY_LOCAL_STORAGE_KEY));
  private _dataSource = this._fakturyLista;
  private _sprzedawcy = SPRZEDAWCY
  private _displayedColumns = ['numerFaktury', 'nazwaSprzedawcy', 'kwotaFaktury', 'typFaktury', 'details'];
  readonly Role = Role;
  selectedSprzedawca: any;

  constructor(private router: Router) {}

  ngOnInit(): void {localStorage.setItem(SPRZEDAWCY_LOCAL_STORAGE_KEY, JSON.stringify(this._sprzedawcy));}

  dodajFakture(): void {
    this.router.navigateByUrl(URL_FAKTURA);
  }

  onChanged(value: any): void {
    this._dataSource = this._fakturyLista.filter(am => am.sprzedawca.nazwa === value.nazwa);
  }

  clearFilter(event: Event): void {
    event.stopPropagation();
    this.selectedSprzedawca = null;
    this._dataSource = this._fakturyLista;
  }

  clearAllFaktury(): void {
    this._fakturyLista = [];
    this._dataSource = [];
    localStorage.setItem(FAKTURY_LOCAL_STORAGE_KEY, JSON.stringify(this._fakturyLista));
  }

  clickRow(row: any): void {
    this.router.navigateByUrl(URL_FAKTURA + '/' + row.id);
  }

  viewDetails(element: any): void {
    // Implement the logic to view details of the selected invoice
    console.log('Viewing details for:', element);
  }

  get podatekNalezny(): number {
    return parseFloat(this._fakturyLista
      .filter(faktura => faktura.typ === 'przychodowa')
      .reduce((sum, faktura) => sum + faktura.kwotaFaktury * 0.23, 0)
      .toFixed(2));
  }

  get podatekNaliczony(): number {
    return parseFloat(this._fakturyLista
      .filter(faktura => faktura.typ === 'kosztowa')
      .reduce((sum, faktura) => sum + faktura.kwotaFaktury * 0.23, 0)
      .toFixed(2));
  }

  get vatDoZaplaty(): number {
    return parseFloat((this.podatekNalezny - this.podatekNaliczony).toFixed(2));
  }

  get fakturyLista(): Array<Faktura> {
    return this._fakturyLista;
  }

  get dataSource(): Array<Faktura> {
    return this._dataSource;
  }

  get sprzedawcy(): Sprzedawca[] {
    return this._sprzedawcy;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }
}
