import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		NewTaskComponent
	],
	imports: [
		CommonModule,
		TaskRoutingModule,
		FormsModule
	],
	exports:[
		NewTaskComponent
	]
})
export class TaskModule { }