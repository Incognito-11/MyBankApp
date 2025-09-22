import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { Account } from 'src/app/core/models/account.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { AccountService } from 'src/app/account/accounts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  account$!: Observable<Account | null>;

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    // Step 1: Get user from AuthService
    this.user = this.authService.getCurrentUser();

    // Step 2: If user exists, fetch their account info
    if (this.user) {
      this.account$ = this.accountService.getAccountInfo();
    } else {
      this.account$ = of(null);
    }
  }

  logout() {
    this.authService.logout();
  }
}
