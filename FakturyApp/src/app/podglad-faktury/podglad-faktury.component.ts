import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Faktura} from "../model/faktura.model";
import {FAKTURY_LOCAL_STORAGE_KEY, URL_HOME} from '../common/constants';

@Component({
  selector: 'app-podglad-faktury',
  templateUrl: './podglad-faktury.component.html',
  styleUrls: ['./podglad-faktury.component.scss']
})
export class PodgladFakturyComponent implements OnInit {

  private _faktura: Faktura = JSON.parse(<string>localStorage.getItem(FAKTURY_LOCAL_STORAGE_KEY))
    .filter(faktura => faktura.id === this.route.snapshot.params.id)[0];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  get faktura(): Faktura {
    return this._faktura;
  }

  zamknij(): void {
    this.router.navigateByUrl(URL_HOME);
  }
}
