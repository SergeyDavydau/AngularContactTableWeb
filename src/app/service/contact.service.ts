import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../model/contact";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactWievUrl: string;
  private contactAddUrl: string;
  private contactEditUrl: string;
  private contactDeleteUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.contactWievUrl = 'http://localhost:8080/';
    this.contactAddUrl = 'http://localhost:8080/add';
    this.contactEditUrl = 'http://localhost:8080/edit/';
    this.contactDeleteUrl = 'http://localhost:8080/delete/'
  }

  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactWievUrl);
  }

  public save(contact: Contact) {
    return this.http.post<Contact>(this.contactAddUrl, contact);
  }

  public edit(id: String) {
    console.log('Prequesrt edit');
    return this.http.get<Contact>(this.contactEditUrl + id);
  }

  public delete(id: String) {
    console.log('Delete method send id=', id);
    return this.http.get(this.contactDeleteUrl + id);
  }

}
