import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Sprzedawca} from "../model/sprzedawca.model";
import {Router} from "@angular/router";
import {Faktura} from "../model/faktura.model";
import {FAKTURY_LOCAL_STORAGE_KEY, SPRZEDAWCY_LOCAL_STORAGE_KEY, URL_HOME} from '../common/constants';

@Component({
  selector: 'app-nowa-faktura',
  templateUrl: './nowa-faktura.component.html',
  styleUrls: ['./nowa-faktura.component.scss']
})
export class NowaFakturaComponent implements OnInit {
  private _fakturyLista: Array<Faktura> = JSON.parse(<string>localStorage.getItem(FAKTURY_LOCAL_STORAGE_KEY));
  private _sprzedawcy: Sprzedawca[] = localStorage.getItem(SPRZEDAWCY_LOCAL_STORAGE_KEY)
    ? JSON.parse(<string>localStorage.getItem(SPRZEDAWCY_LOCAL_STORAGE_KEY)) : [{}];
  private _formGroup: FormGroup = this.formBuilder.group({
    'numer': new FormControl('', Validators.required),
    'kwotaFaktury': new FormControl('', [Validators.required, Validators.min(0)]),
    'dataWystawienia': new FormControl('', Validators.required),
    'id': new FormControl('', Validators.required),
    'nazwa': new FormControl('', Validators.required),
    'adres': new FormControl('', Validators.required),
    'typ': new FormControl('', Validators.required)
  }, { validators: this.allFieldsFilledValidator });

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(values: any): void {
    if (this._formGroup.valid) {
      if (this._fakturyLista === null || this._fakturyLista === undefined) {
        this._fakturyLista = [this.parseFaktura(values)];
      } else {
        this._fakturyLista = [...this._fakturyLista, this.parseFaktura(values)];
      }
      localStorage.setItem(FAKTURY_LOCAL_STORAGE_KEY, JSON.stringify(this._fakturyLista));
      this.router.navigateByUrl(URL_HOME);
    }
  }

  onChanged(value: any): void {
    this._formGroup.patchValue({'id': value.id});
    this._formGroup.patchValue({'nazwa': value.nazwa});
    this._formGroup.patchValue({'adres': value.adres});
  }

  anuluj(): void {
    this.router.navigateByUrl(URL_HOME);
  }

  private allFieldsFilledValidator(group: FormGroup): { [key: string]: any } | null {
    const controls = group.controls;
    for (const name in controls) {
      if (controls[name].value === '' || controls[name].value === null) {
        return { allFieldsFilled: false };
      }
    }
    return null;
  }

  private parseFaktura(values: any): Faktura {
    return {
      id: this.uuidv4(),
      numer: values.numer,
      dataWystawienia: values.dataWystawienia,
      sprzedawca: {id: values.id, nazwa: values.nazwa, adres: values.adres},
      kwotaFaktury: values.kwotaFaktury,
      typ: values.typ
    };
  }

  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  get sprzedawcy(): Sprzedawca[] {
    return this._sprzedawcy;
  }

  get formGroup(): FormGroup {
    return this._formGroup;
  }
}
