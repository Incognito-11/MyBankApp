import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css'],
})
export class TransferFormComponent implements OnInit {
  toAccount!: 'string';
  amount:number= 0;
  type: 'credit' | 'debit' = 'debit';
  constructor(private http: HttpClient, private auth: AuthService) {}
  transfer() {
    const tx = {
      id: Date.now(),
      amount: this.amount,
      date: new Date().toISOString(),
      type: this.type,
      fromUser: this.auth.currentUser,
      toAccount: this.toAccount,
    };
    this.http.post('http://localhost:3000/transactions',tx).subscribe();
  }

  ngOnInit() {}
}
