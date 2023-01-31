import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersNewComponent } from './users-new/users-new.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
	declarations: [
		UsersNewComponent,
		UserListComponent
	],
	imports: [
		CommonModule,
		UsersRoutingModule,
		FormsModule
	],
	exports: [
		UsersNewComponent,
		UserListComponent
	]
})
export class UsersModule { }