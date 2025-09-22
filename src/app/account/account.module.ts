import { NgModule } from '@angular/core';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account.routing.module';

@NgModule({
  declarations: [AccountInfoComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccontMudule {}
