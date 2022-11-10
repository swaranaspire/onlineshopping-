import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'dashboard', component: DashboardComponent,
  canActivate:[AuthguardGuard],
children:[
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
