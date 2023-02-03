import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
	declarations: [
		NewTaskComponent,
		EditTaskComponent
	],
	imports: [
		CommonModule,
		TaskRoutingModule,
		FormsModule
	],
	exports: [
		NewTaskComponent,
		EditTaskComponent
	]
})
export class TaskModule { }