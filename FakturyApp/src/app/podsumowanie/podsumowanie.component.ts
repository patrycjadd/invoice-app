import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.scss']
})
export class PodsumowanieComponent {
  @Input() podatekNalezny: number;
  @Input() podatekNaliczony: number;
  @Input() vatDoZaplaty: number;
}
