import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public contactID!: string;
  public contact = new Contact('', '', '', '', '');
  public message!: string;
  public isSuccess: boolean = false;
  public isError: boolean = false;
  constructor(private _cs: ContactService, private _acroute: ActivatedRoute, private _route: Router) {}

  onAdding(name: string, email: string, phone: string, type: string) {
    this.contact.authorId = localStorage.getItem('userID')!;
    this.contact.ContactName = name
    this.contact.ContactEmail = email
    this.contact.ContactPhone = phone
    this.contact.ContactType = type
    console.log(this.contact)

    this._cs.addNewContact(this.contact).subscribe(rs => {
      console.log(rs)
      console.log(this.contact)
      this.message = rs.message
      this.isError = false
      this.isSuccess = true
      this._route.navigate(['/contacts/list']);
    }, err => {
      console.log(err)
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })
    
  
  }

  ngOnInit(): void {}
    
}
