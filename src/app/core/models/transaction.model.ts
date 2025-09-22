export interface Transaction {
  id: number;
  type: 'credit' | 'debit';
  amount: number;
  date: string;
  fromUser?: string;
  toAccount: string;
}
