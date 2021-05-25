import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./component/contact/contact.component";
import {ContactFormComponent} from "./component/contact-form/contact-form.component";;


const routes: Routes = [
  { path: 'contact_view', component: ContactComponent },
  { path: 'contact_add', component: ContactFormComponent },
  { path: 'contact_edit/:id' , component: ContactFormComponent },
  { path: 'contact_delete/:delete_id' , component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
