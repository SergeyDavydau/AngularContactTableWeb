import {Contact} from "./contact";

export class TelephonNumber {
  id: Number = 0;

  number: string = "";

  chosen: boolean = false;

  contact: Contact = new Contact();

  constructor() {
  }
}
