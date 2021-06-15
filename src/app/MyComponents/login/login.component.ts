import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message!: string;
  public isError: boolean = false;
  public isSuccess: boolean = false;
  public email!: string;
  public password!: string;
  constructor(private _userService: UserService,private _router:Router) { }

  ngOnInit(): void {
  }
  onLogin() {
    const loginInfo = {
      email: this.email,
      password: this.password
    }
    this._userService.loginUser(loginInfo).subscribe(response => {
      console.log(response)
      this.message = response.message;
      this.isSuccess = true;
      this.isError = false;
this._router.navigate(['/contacts/list'])
      // setTimeout(() => {
      //   this.isSuccess = false;
      // }, 5000);
      
      localStorage.setItem('token',response.token);
      localStorage.setItem('userID',response.user.id);
      localStorage.setItem('userName',response.user.name);
    }, err => {
      this.message = err.error.message;
      this.isSuccess = false;
      this.isError = true;

      // setTimeout(() => {
      //   this.isError = false;
      // }, 5000);


    })

    setTimeout(() =>{
      this.isError = false;
      this.isSuccess = false;
    }, 5000);
  }

}
