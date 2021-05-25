import {EmailAddress} from "./email-address";
import {newArray} from "@angular/compiler/src/util";
import {TelephonNumber} from "./telephon-number";

export class Contact {
  id: Number = 0;

  name: string = "";

  sur_name: string = "";

  last_name: string = "";

  date_of_birth: Date = new Date();

  post_adres: string = "";

  home_adres: string = "";

  email_adres: EmailAddress[] = [];

  telephon_numbers: TelephonNumber[] = [];

  constructor() {
  }

}
