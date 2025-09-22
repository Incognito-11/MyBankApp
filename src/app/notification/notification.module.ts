import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotificationListComponent } from "./notification-list/notification-list.component";
const routes:Routes=[
  {path:'', component:NotificationListComponent}
]
@NgModule({
  declarations:[NotificationListComponent],
  imports:[CommonModule, RouterModule.forChild(routes)]
})
export class NotificationModule{}