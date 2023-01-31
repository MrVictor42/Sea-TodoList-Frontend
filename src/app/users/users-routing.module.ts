import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
	{ path: 'new-user', component: UsersNewComponent },
	{ path: 'user-list', component: UserListComponent },
	{ path: 'current-user/:userId', component: UserDetailComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {

}