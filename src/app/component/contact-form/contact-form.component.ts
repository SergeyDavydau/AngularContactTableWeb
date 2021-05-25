import {Component} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactService} from "../../service/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmailAddress} from "../../model/email-address";
import {TelephonNumber} from "../../model/telephon-number";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact: Contact = new Contact();

  email_list: EmailAddress[] = [];

  telephon_list: TelephonNumber[] = [];

  email: EmailAddress = new EmailAddress();

  telephone: TelephonNumber = new TelephonNumber();


  delete_icon = faTrash;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contact_service: ContactService) {

    this.route.params.subscribe(params => {
      let id = params["id"];
      if (id != "") {
        contact_service.edit(id).subscribe(data => {
          this.contact = data;
          this.email_list = data.email_adres;
          this.telephon_list = data.telephon_numbers;
        });
      }
    });
  }

  onSubmit() {
    if (this.email.adress != "") {
      this.contact.email_adres.push(this.email);
    } else {
      this.contact.email_adres = this.email_list;
    }
    if (this.telephone.number != "") {
      this.contact.telephon_numbers.push(this.telephone);
    }
    this.contact_service.save(this.contact).subscribe(result => this.gotoContactList());
  }

  gotoContactList() {
    this.router.navigate(['/contact_view']);
  }

  deleteObjectInList(index: number, arr: Object[]) {
    arr.splice(index, 1);
  }

  setChosenRecordInlist(index: number, arr: TelephonNumber[] | EmailAddress[]) {

    if (arr[index].chosen) {
      arr == this.contact.email_adres ? this.contact.email_adres[index].chosen = false : this.contact.telephon_numbers[index].chosen = false;
    } else {
      let chosenSize = 0;
      for (let record of arr) {
        if (record.chosen) {
          ++chosenSize;
        }
      }

      if (chosenSize == 0) {
        arr == this.contact.email_adres ? this.contact.email_adres[index].chosen = true : this.contact.telephon_numbers[index].chosen = true;
      } else {
        let f = document.getElementById(arr == this.contact.email_adres ? "mail" + index : "telephone" + index);
        if (f != null) {
          f.setAttribute("[checked]", "false")
        }
      }
    }
  }

}
