import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UsersNewComponent } from './users-new/users-new.component';

const routes: Routes = [
	{ path: 'new-user', component: UsersNewComponent },
	{ path: 'user-list', component: UserListComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {

}