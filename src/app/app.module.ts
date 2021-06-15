import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { NavComponent } from './MyComponents/nav/nav.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegistrationComponent } from './MyComponents/registration/registration.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactsComponent } from './MyComponents/contacts/contacts.component';
import { ListComponent } from './MyComponents/contacts/list/list.component';
import { AddComponent } from './MyComponents/contacts/add/add.component';
import { EditComponent } from './MyComponents/contacts/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    ContactsComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
