import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
