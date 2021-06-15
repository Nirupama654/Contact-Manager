import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
 import {environment} from '../environments/environment';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // [x: string]: any;
  // private _url = "http://localhost:4000/api/contact"
  constructor(private _http: HttpClient) { }
  // listAllContacts() {
  //   return this._http.get<{message:string,contacts:any}>(environment.baseUrlContact);
  // }
  listAllContactsByUser() {
    return this._http.get<{message:string,contacts:any}>(environment.baseUrlContact + '/getContactsByAuthor/'+localStorage.getItem('userID'),{headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
  });
  }

  getContactByID(id:string){
    return this._http.get<{message:string,contacts:any}>(environment.baseUrlContact+'/getbyid/'+id,{headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
  });
  }

  updateContact(id:string,contacts:any){
    return this._http.put<{message:string}>(`${environment.baseUrlContact}/update/${id}`,contacts,{headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)})
  }

  deleteContactByID(id:string){
    return this._http.delete<{message:string,deletedContact:any}>(`${environment.baseUrlContact}/delete/${id}`,{headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
  });
  }
  addNewContact(contact:Contact){
    return this._http.post<{message:string,contact:any}>(environment.baseUrlContact+'/save',contact,{headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
  });
  }
}
