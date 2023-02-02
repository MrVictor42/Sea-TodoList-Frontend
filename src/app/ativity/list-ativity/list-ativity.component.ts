import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/authentication';
import { Activity } from '../../model/activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-list-ativity',
  templateUrl: './list-ativity.component.html',
  styleUrls: ['./list-ativity.component.css']
})
export class ListAtivityComponent implements OnInit {

	user : User = new User();
	activities : Activity[] = [];
	activitySelected : Activity = new Activity();
	successMessage : string = "";
	errorMessage : string = "";

	constructor(private activityService : ActivityService, private authService : AuthService) {

	}

	ngOnInit(): void {
		this.authService.getAuthenticatedUser().subscribe(response => {
            this.user = response;
			this.activityService.getActivityList(this.user.userId).subscribe(response => {
				this.activities = response;
			});
        });
	}

	selectedActivity(activity : Activity) : void {
		this.activitySelected = activity;
	}

	deleteActivity() : void {
		this.activityService.delete(this.activitySelected.activityId).subscribe(response => {
			this.successMessage = "Atividade Excluida Com Sucesso";
			this.ngOnInit();
		}, errorResponse => {
			this.errorMessage = "Ocorreu um Erro ao Deletar a Atividade";
		});
	}
}