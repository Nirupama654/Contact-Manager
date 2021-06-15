import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
public contactID!:string;
public contact = new Contact('','','','','');
public message!:string;
public isSuccess:boolean = false;
public isError:boolean=false;
  constructor(private _cs:ContactService,private _acroute:ActivatedRoute,private _route:Router) { }

  ngOnInit(): void {
    // Grabbing the contactID
    this._acroute.params.subscribe(param=>{
      this.contactID = param.id
    })

    this._cs.getContactByID(this.contactID).subscribe((rs: any)=>{
      console.log(rs);
       
      // this.contactID = localStorage.getItem('userID')!;
      this.contact.authorId = localStorage.getItem('userID')!;
      this.contact.ContactName = rs.contacts.ContactName
      this.contact.ContactEmail = rs.contacts.ContactEmail
      this.contact.ContactPhone = rs.contacts.ContactPhone
      this.contact.ContactType = rs.contacts.ContactType

      
    },err=>{

    })
  }

  onSubmitContact(){
    this._cs.updateContact(this.contactID,this.contact).subscribe(rs=>{
      console.log(rs)
      this.message = rs.message
      this.isError = false
      this.isSuccess = true
      this._route.navigate(['/contacts/list']);
    },err=>{
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })

    
  }

}
