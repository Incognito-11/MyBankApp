import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../core/models/account.model';
import { AuthService } from '../core/services/auth.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly apiUrl = 'http://localhost:3000/accounts';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  /**
   * Fetches the full Account object for the currently logged-in user.
   * Returns `null` if no user is logged in or on error.
   */
  getAccountInfo(): Observable<Account | null> {
    const currentUser = this.auth.getCurrentUser();
    if (!currentUser) {
      return of(null);
    }

    return this.http.get<Account>(`${this.apiUrl}/${currentUser.accountId}`)
      .pipe(
        catchError(err => {
          console.error('Failed to load account info', err);
          return of(null);  // Return null in case of an error
        })
      );
  }

  /**
   * Updates the logged-in user’s account (e.g., balance after a transfer).
   * Returns the updated Account or throws an error.
   */
  updateBalance(newBalance: number): Observable<Account> {
    const currentUser = this.auth.getCurrentUser();
    if (!currentUser) {
      return throwError(() => new Error('User not authenticated'));
    }

    return this.http.patch<Account>(
      `${this.apiUrl}/${currentUser.accountId}`,
      { balance: newBalance }
    ).pipe(
      catchError(err => {
        console.error('Failed to update account balance', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Convenience: returns just the numeric balance for binding in components.
   */
  getBalance(): Observable<number> {
    return this.getAccountInfo().pipe(
      map(acc => acc ? acc.balance : 0)  // Default to 0 if account info is null
    );
  }

  /**
   * Log out the user and clear any cached data.
   */
  logout(): void {
    this.auth.logout();
  }
}
