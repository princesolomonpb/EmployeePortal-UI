import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
registerForm:FormGroup;
constructor(private authService:AuthserviceService,private fb:FormBuilder){
  this.registerForm=this.fb.group({
    fullName:['',Validators.required],
    email:['',Validators.required,Validators.email],
    password:['',Validators.required]
  })
}
 register() {

    if (this.registerForm.invalid)
      return;

    this.authService
      .RegisterUser(this.registerForm.value)
      .subscribe({
        next: (response) => {
          alert('User Registered Successfully');
          console.log(response);
        },
        error: (error) => {

  if (error.error?.message) {
    alert(error.error.message);
  }
  else {
    alert('Registration Failed');
  }

}
      });
  }
}
