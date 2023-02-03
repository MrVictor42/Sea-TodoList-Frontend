import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from '../task.service';

@Component({
	selector: 'app-edit-task',
	templateUrl: './edit-task.component.html',
	styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

	task: Task = new Task();
	activityId: number = 0;
	taskId: number = 0;
	errors: String[] | null = [];

	constructor(private taskService: TaskService, private router: Router, private activateRoute: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.taskId = this.activateRoute.snapshot.params['taskId'];
		this.taskService.getCurrentTask(this.taskId).subscribe(response => {
			this.task = response;
			this.activityId = this.task.activity.activityId;
		});
	}

	onSubmit() {
		this.taskService.update(this.task).subscribe(response => {
			this.errors = null;
			this.router.navigate([`/task/new/${ this.activityId }`]);
		}, errorResponse => {
			this.errors = errorResponse.error.errors;
		});
	}

	backToList(): void {
		this.router.navigate([`/task/new/${ this.activityId }`]);
	}
}