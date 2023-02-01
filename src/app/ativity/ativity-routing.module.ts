import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditAtivityComponent } from './edit-ativity/edit-ativity.component';
import { ListAtivityComponent } from './list-ativity/list-ativity.component';
import { NewActivityComponent } from './new-ativity/new-ativity.component';

const routes: Routes = [
	{ path: 'new-activity', component: NewActivityComponent },
	{ path: 'activity-list', component: ListAtivityComponent },
	{ path: 'edit-activity/:activityId', component: EditAtivityComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AtivityRoutingModule { }