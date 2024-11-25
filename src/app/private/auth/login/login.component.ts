import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  user:string = '';
  password:string = '';

  constructor(private authService: AuthService, private router: Router){}

  login():void{
    this.authService.login(this.user, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => console.log('Login failed', err)
    })
  }

  logout():void {
    this.authService.logout();
  }
}