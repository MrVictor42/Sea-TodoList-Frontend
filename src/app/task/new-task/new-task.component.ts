import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../model/task';
import { Activity } from '../../model/activity';
import { TaskService } from '../task.service';
import { ActivityService } from 'src/app/ativity/activity.service';

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
	
	task : Task = new Task();
	tasks : Task[] = [];
	activity : Activity = new Activity();
	success : string | null = "";
	errors: String[] | null = [];
	activityId : number = 0;
	taskSelected : Task = new Task();
	newTitle : string = "";

	constructor(
		private activateRoute : ActivatedRoute, 
		private taskService : TaskService,
		private router : Router,
		private activityService : ActivityService) {

	}

	ngOnInit(): void {
		this.activityId = this.activateRoute.snapshot.params['activityId'];
		this.taskService.getListTask(this.activityId).subscribe(response => {
			this.tasks = response;
		});
		this.activityService.getCurrentActivity(this.activityId).subscribe(response => {
			this.activity = response;
		});
	}

	selectedTask(task : Task) : void {
		this.taskSelected = task;
	}

	onSubmit() : void {
		this.task.activityId = this.activityId;

		this.taskService.save(this.task).subscribe(response => {
			this.success = "Tarefa Adicionada Com Sucesso!";
			this.errors = null;
			this.task = new Task();
			this.ngOnInit();
		}, errorResponse => {
			this.success = null;
			this.errors = errorResponse.error.errors;
		});
	}

	backToList() : void {
		this.router.navigate(['/activity/list']);
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

	updateTask() : void {
		this.taskSelected.title = this.newTitle;
		this.taskService.update(this.taskSelected).subscribe(response => {
			this.success = "Atividade Atualizada Com Sucesso";
			this.errors = null;
			this.newTitle = "";
			this.ngOnInit();
		}, errorResponse => {
			this.errors = ["Ocorreu um Erro ao Atualizar a Tarefa"];
			this.success = null;
			this.newTitle = "";
		});
	}
}