import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Sprzedawca} from "../model/sprzedawca.model";
import {Router} from "@angular/router";
import {SPRZEDAWCY_LOCAL_STORAGE_KEY, URL_HOME, URL_SPRZEDAWCA_EDIT} from '../common/constants';

@Component({
  selector: 'app-sprzedawca',
  templateUrl: './sprzedawca.component.html',
  styleUrls: ['./sprzedawca.component.scss']
})
export class SprzedawcaComponent implements OnInit {

  private _czyMozliwaEdycja: boolean = this.router.url === URL_SPRZEDAWCA_EDIT;
  private _formGroup: FormGroup = this.formBuilder.group({
    'id': new FormControl({'value': "", 'disabled': !this._czyMozliwaEdycja}),
    'nazwa': new FormControl({'value': "", 'disabled': !this._czyMozliwaEdycja}),
    'adres': new FormControl({'value': "", 'disabled': !this._czyMozliwaEdycja})
  });
  private _sprzedawcy: Sprzedawca[] = localStorage.getItem(SPRZEDAWCY_LOCAL_STORAGE_KEY)
    ? JSON.parse(<string>localStorage.getItem(SPRZEDAWCY_LOCAL_STORAGE_KEY)) : [{}];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(value: any): void {
    this.router.navigateByUrl(URL_HOME);
  }

  onChanged(value): void {
    this._formGroup.patchValue({'id': value.id});
    this._formGroup.patchValue({'nazwa': value.nazwa});
    this._formGroup.patchValue({'adres': value.adres});
  }

  anuluj(): void {
    this.router.navigateByUrl(URL_HOME);
  }

  get czyMozliwaEdycja(): boolean {
    return this._czyMozliwaEdycja;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }

  get sprzedawcy(): Sprzedawca[] {
    return this._sprzedawcy;
  }
}
