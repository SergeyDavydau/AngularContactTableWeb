import {Contact} from "./contact";

export class EmailAddress {
  id: Number = 0;

  adress: string = "";

  chosen: boolean = false;

  contact: Contact = new Contact();

  constructor() {
  }
}
