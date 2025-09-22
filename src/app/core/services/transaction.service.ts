import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private baseUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }

  getLast10Transactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}?_sort=date&_order=desc&_limit=10`);
  }

  addTransaction(tx: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, tx);
  }
}