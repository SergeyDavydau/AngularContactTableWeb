import {Component, OnInit} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactService} from "../../service/contact.service";
import {faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];

  edit_icon = faPencilAlt;

  delete_icon = faTrash;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.contactService.findAll().subscribe(data => {
      this.contacts = data;
    });

    this.route.params.subscribe(params => {
      let id = params["delete_id"];
      if (id != "") {
        this.contactService.delete(id).subscribe(data => {
          this.router.navigate(['/contact_view']);
        });
      }
    });
  }
}
