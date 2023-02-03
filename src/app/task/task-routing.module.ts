import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication';
import { LayoutComponent } from '../layout/layout.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
	{ path: 'task', component: LayoutComponent, canActivate: [AuthGuard], children: [
		{ path: 'new/:activityId', component: NewTaskComponent },
		{ path: 'edit/:taskId', component: EditTaskComponent },
		{ path: '', redirectTo: '/activity/list', pathMatch: 'full' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TaskRoutingModule { }