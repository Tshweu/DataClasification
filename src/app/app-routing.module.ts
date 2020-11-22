import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FileUploadComponent } from './components/home/file-upload/file-upload.component';
import { ReviewComponent } from './components/home/review/review.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent,
  children:[
    {path:'upload',component:FileUploadComponent},
    {path:'review',component:ReviewComponent},
    ],
  canActivate:[AuthGuard]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
