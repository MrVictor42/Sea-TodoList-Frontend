import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
	selector: 'app-new-ativity',
	templateUrl: './new-ativity.component.html',
	styleUrls: ['./new-ativity.component.css']
})
export class NewActivityComponent {

	activity : Activity = new Activity();
	success : boolean = false;
	errors: String[] | null = [];

	constructor(private router : Router, private activityService : ActivityService) {

	}

    onSubmit() : void {
		this.activityService.save(this.activity).subscribe(response => {
			this.success = true;
			this.errors = null;
			this.router.navigate(['/activity-list']);
		}, errorResponse => {
			this.success = false;
			this.errors = errorResponse.error.errors;
		});
    }

	backToList() : void {
		this.router.navigate(['/activity-list']);
	}
}