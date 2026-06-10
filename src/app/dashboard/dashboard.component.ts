import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  message = '';

  constructor(
    private authService: AuthserviceService,private router: Router
  ) { }

  ngOnInit(): void {

    this.authService
      .getProfile()
      .subscribe({
        next: (response: any) => {

          console.log(response);

          this.message = response.message;
        },
        error: (error) => {

          console.log(error);

          this.message = 'Unauthorized';
        }
      });

  }
  logout() {

  localStorage.removeItem('token');

  this.router.navigate(['/login']);
}
}
