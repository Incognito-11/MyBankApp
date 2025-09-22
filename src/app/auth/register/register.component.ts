import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    if (!this.username || !this.password) {
      this.error = 'Username and password are required.';
      return;
    }

    const newUser: User = {
      id: 0,
      username: this.username,
      password: this.password,
      cifNumber: this.generateCIF(),
      accountId: this.generateAccountNumber(), 
    };

    this.auth.register(newUser).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: (err) => {
        console.error('Registration error:', err);
        this.error = 'Registration failed. Please try again.';
      },
    });
  }

  generateCIF() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  }

  generateAccountNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
  }
}
