import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../ativity/activity.service';
import { Activity } from '../../model/activity';

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
	
	activity : Activity = new Activity();
	errors: String[] | null = [];

	constructor(private activityService : ActivityService, private activateRoute : ActivatedRoute) {

	}

	ngOnInit(): void {
		const activityId = this.activateRoute.snapshot.params['activityId'];
		this.activityService.getCurrentActivity(activityId).subscribe(response => {
			this.activity = response;
		});
	}

	onSubmit() : void {

	}
}
