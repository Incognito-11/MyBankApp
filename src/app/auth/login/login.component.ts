import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.username, this.password).subscribe(user => {
      if (user) {
        alert('Login Successfull'); 
        this.router.navigate(['/dashboard']); 
      } else {
        this.error = 'Invalid Credentials';
      }
    });
  }
}
