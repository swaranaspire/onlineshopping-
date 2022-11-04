import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup =new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  signin(){
    console.log(this.loginForm.value);

    console.log(this.loginForm.value);
    this.loginservice.createLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert('success');
        sessionStorage.setItem('myAppToken', data.taken);
        this.router.navigateByUrl('/dashboard');
        console.log(data);
      },
      (error:any) => {
        alert('internal server error');
      }
    );
  }
  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
  }

}
