import { NgModule } from "@angular/core";
import { TransferFormComponent } from "./transfer-form/transfer-form.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const routes:Routes=[
  {path:'', component:TransferFormComponent}
];
@NgModule({
  declarations:[TransferFormComponent],
  imports:[CommonModule,FormsModule,RouterModule.forChild(routes)]
})
export class TrasnferModule{}