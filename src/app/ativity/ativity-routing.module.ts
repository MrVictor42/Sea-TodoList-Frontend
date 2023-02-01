import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { EditAtivityComponent } from './edit-ativity/edit-ativity.component';
import { ListAtivityComponent } from './list-ativity/list-ativity.component';
import { NewActivityComponent } from './new-ativity/new-ativity.component';

const routes: Routes = [
	{ path: 'activity', component: LayoutComponent, children: [
		{ path: 'new', component: NewActivityComponent },
		{ path: 'list', component: ListAtivityComponent },
		{ path: 'edit/:activityId', component: EditAtivityComponent },
		{ path: '', redirectTo: '/activity/list', pathMatch: 'full' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AtivityRoutingModule { }