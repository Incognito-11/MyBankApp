import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
const routes: Routes = [{ path: '', component: AccountInfoComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AccountRoutingModule {}
