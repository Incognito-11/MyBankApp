import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../accounts.service';
import { Account } from 'src/app/core/models/account.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  account$!:Observable<Account | null>; 
  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.account$=this.accountService.getAccountInfo();
  }

}
