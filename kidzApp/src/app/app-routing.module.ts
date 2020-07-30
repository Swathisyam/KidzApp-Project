import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { NumbersComponent } from './numbers/numbers.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AddNumberComponent } from './add-number/add-number.component';
import { EditNumberComponent } from './edit-number/edit-number.component';
import { AdlogComponent } from './adlog/adlog.component';





const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    // path:'adlog',
    // component:AdlogComponent,


  children:[
      {path:'add-number',component: AddNumberComponent},
      // {path:'adlog',component:AdlogComponent}
      
      // {path:'admin',component:AdminComponent}
    ]
  },
  {path:'adlog',component:AdlogComponent},

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'puzzle',
    component:PuzzleComponent,
    canActivate : [AuthGuard],
    children:[
      {path:'numbers',component:NumbersComponent}
    ]
  },
  {
    path:'edit/:id',
    component:EditNumberComponent 

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
