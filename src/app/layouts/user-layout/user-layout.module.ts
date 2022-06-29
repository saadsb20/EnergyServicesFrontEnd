import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboradComponent } from 'src/app/pages/user-dashborad/user-dashborad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserLayoutRoutes } from './user-layout-routing';




@NgModule({
  declarations: [
    UserDashboradComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule
  ]
})
export class UserLayoutModule { }
