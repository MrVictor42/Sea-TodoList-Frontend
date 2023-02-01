import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
	{ path: 'user', component: LayoutComponent, children: [
		{ path: 'new', component: UsersNewComponent },
		{ path: 'list', component: UserListComponent },
		{ path: 'current-user/:userId', component: UserDetailComponent },
		{ path: '', redirectTo: '/user/list', pathMatch: 'full' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {

}