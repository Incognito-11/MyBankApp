import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/transaction.model';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
transactions:Transaction[]=[];

  constructor(private txService: TransactionService) { }

  ngOnInit() {
    this.txService.getLast10Transactions().subscribe(txs=>this.transactions=txs)
  }

}
