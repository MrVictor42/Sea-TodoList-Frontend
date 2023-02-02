import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../model/activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-edit-ativity',
  templateUrl: './edit-ativity.component.html',
  styleUrls: ['./edit-ativity.component.css']
})
export class EditAtivityComponent implements OnInit {

	activity : Activity = new Activity();
	errors: String[] | null = [];
	
	constructor(private activityService : ActivityService, private activateRoute : ActivatedRoute, private router : Router) {

	}

	ngOnInit(): void {
		const activityId = this.activateRoute.snapshot.params['activityId'];
		this.activityService.getCurrentActivity(activityId).subscribe(response => {
			this.activity = response;
		});
	}

	onSubmit() : void {
		this.activityService.update(this.activity).subscribe(response => {
			this.errors = null;
			this.router.navigate(['/activity/list']);
		}, errorResponse => {
			this.errors = errorResponse.error.errors;
		});
	}

	backToList() : void {
		this.router.navigate(['/activity/list']);
	}
}