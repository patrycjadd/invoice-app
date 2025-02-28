import {Sprzedawca} from "./sprzedawca.model";

export interface Faktura {
  id: string;
  numer: string;
  dataWystawienia: Date;
  sprzedawca: Sprzedawca;
  kwotaFaktury: number;
  typ: string; // Add the 'typ' property
}
