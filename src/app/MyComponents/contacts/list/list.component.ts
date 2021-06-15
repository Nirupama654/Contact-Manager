import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // myform: FormGroup;
})
export class ListComponent implements OnInit {

  public contactID!: string;
  public contact :any = '';
  public message!: string;
  public isSuccess: boolean = false;
  public isError: boolean = false;
  public contactData: any[] = []
  // myform: any;
  myForm: any;
  constructor(@Inject(DOCUMENT) private _document: Document, private _cs: ContactService, private _acroute: ActivatedRoute) { }



  ngOnInit(): void {
    this._acroute.params.subscribe(param => {
      this.contactID = param.id!;
    })

    this._cs.listAllContactsByUser().subscribe(response => {
      console.log(response.contacts)
      this.contactData = response.contacts;
    }, err => {
      console.log(err)
    })


  }

  onDelete(id: any) {
    this._cs.deleteContactByID(id).subscribe(response => {
      console.log(response)
      this.message = response.message
      this.isError = false
      this.isSuccess = true
    }, err => {
      console.log(err)
      this.message = err.error.message
      this.isError = true
      this.isSuccess = false
    })

    this._cs.listAllContactsByUser().subscribe(response => {
      // console.log(response.contacts)
      this.contactData = response.contacts;
    }, err => {
      console.log(err)
    })

    setTimeout(() =>{
      this.isError = false;
      this.isSuccess = false;
    }, 5000);

    this.ngOnInit();
  }
  public searchList: any[] = [];
  onSearch(input: any) {
    this.contactData.forEach((element) => {
      if (element.ContactName.includes(input)) {
        this.searchList.push(element);
        // element.style.display = "none"
      }
    })

    this.contactData = this.searchList;
  }
  onLeaving(searchValue: any) {
    this.ngOnInit();
    searchValue.value = '';
    this.searchList = [];
  }
  // public index: any;
  // public person :any;
  seeDetails(con: any) {
    
    this.contact = con;
  }

  AfterDeleting(){
    this.contact ='';
  }


}
