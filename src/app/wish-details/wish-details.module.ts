import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WishDetailsComponent } from './wish-details/wish-details.component';

const wishDetailsRoutes: Routes = [
  {path: '', component: WishDetailsComponent}
];

@NgModule({
  declarations: [WishDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(wishDetailsRoutes)
  ]
})
export class WishDetailsModule { }
