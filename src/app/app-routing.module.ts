import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './MyComponents/contacts/add/add.component';
import { EditComponent } from './MyComponents/contacts/edit/edit.component';
import { ListComponent } from './MyComponents/contacts/list/list.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegistrationComponent } from './MyComponents/registration/registration.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"contacts/list",component:ListComponent},
  {path:"contacts/add",component:AddComponent},
  {path:"contacts/edit/:id",component:EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
