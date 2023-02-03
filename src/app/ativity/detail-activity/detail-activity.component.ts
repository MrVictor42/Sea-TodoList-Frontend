import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../task/task.service';
import { Activity } from '../../model/activity';
import { ActivityService } from '../activity.service';
import { Task } from 'src/app/model/task';

@Component({
	selector: 'app-detail-activity',
	templateUrl: './detail-activity.component.html',
	styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent implements OnInit {

	activity : Activity = new Activity();
	activityId : number = 0;
	taskSelected : Task = new Task();
	tasks : Task[] = [];
	success : string | null = "";
	errors: String[] | null = [];
	disabled : boolean = false;

	constructor(
		private activityService : ActivityService, 
		private router : Router, 
		private taskService : TaskService,
		private activateRoute : ActivatedRoute) {

	}

	ngOnInit(): void {
		this.activityId = this.activateRoute.snapshot.params['activityId'];
		this.activityService.getCurrentActivity(this.activityId).subscribe(response => {
			this.activity = response;
		});
		this.taskService.getListTask(this.activityId).subscribe(response => {
			this.tasks = response;
		});
	}

	selectedTask(task : Task) : void {
		this.taskSelected = task;
	}

	deleteActivity() : void {
		this.activityService.delete(this.activity.activityId).subscribe(response => {
			this.router.navigate(['/activity/list']);
		}, errorResponse => {

		});
	}

	deleteTask() : void {
		this.taskService.delete(this.taskSelected.taskId).subscribe(response => {
			this.success = "Atividade Excluida Com Sucesso";
			this.errors = null;
			this.ngOnInit();
		}, errorResponse => {
			this.errors = ["Ocorreu um Erro ao Deletar a Tarefa"];
			this.success = null;
		});
	}

	updateStatusTask(task : Task) : void {
		this.taskService.updateStatus(task.taskId).subscribe(response => {
			task.status = !task.status;
		});
	}
}