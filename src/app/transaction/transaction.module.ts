import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionRoutingModule } from './transacton.routing.module';

@NgModule({
  declarations: [TransactionListComponent],
  imports: [CommonModule, TransactionRoutingModule]
})
export class TransactionModule {}