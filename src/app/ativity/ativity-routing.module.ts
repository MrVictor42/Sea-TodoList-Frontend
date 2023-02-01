import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAtivityComponent } from './list-ativity/list-ativity.component';
import { NewActivityComponent } from './new-ativity/new-ativity.component';

const routes: Routes = [
	{ path: 'new-activity', component: NewActivityComponent },
	{ path: 'activity-list', component: ListAtivityComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AtivityRoutingModule { }