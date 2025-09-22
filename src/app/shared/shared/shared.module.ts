import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ScrollDirective } from '../scroll.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent,ScrollDirective],
  exports:[NavbarComponent,ScrollDirective]
})
export class SharedModule {}
