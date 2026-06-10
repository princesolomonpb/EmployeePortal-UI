import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup;
constructor(private fb:FormBuilder,private authService:AuthserviceService,private router:Router){
  this.loginForm=this.fb.group({
    email:['',Validators.required,Validators.email],
    password:['',Validators.required]
  });
}
 login() {

    if (this.loginForm.invalid)
      return;

    this.authService
      .LoginUser(this.loginForm.value)
      .subscribe({
        next: (response) => {

          localStorage.setItem(
            'token',
            response.token
          );

          alert('Login Success');

          this.router.navigate(['/dashboard']);
        },
        error: () => {
          alert('Invalid Email or Password');
        }
      });
  }
}