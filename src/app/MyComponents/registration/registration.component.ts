import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user = new User('', '', '');
  public message!: string;
  public isError: boolean = false;
  public isSuccess: boolean = false;
  constructor(private _userService: UserService,private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._userService.registerUser(this.user).subscribe(response=>{
     this.message = response.message;
     this.isSuccess = true;
     this.isError = false;

     this._router.navigate(["/login"]);
    //  setTimeout(() =>{
    //   this.isSuccess = false;
    // },5000);

    },err=>{
      this.message = err.error.message;
     this.isSuccess = false;
     this.isError = true;

    //  setTimeout(() =>{
    //   this.isError = false;
    // },5000);

    })

    setTimeout(() =>{
      this.isError = false;
      this.isSuccess = false;
    }, 5000);
  }

}
