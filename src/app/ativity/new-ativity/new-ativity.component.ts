import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/authentication';
import { Activity } from '../../model/activity';
import { ActivityService } from '../activity.service';

@Component({
	selector: 'app-new-ativity',
	templateUrl: './new-ativity.component.html',
	styleUrls: ['./new-ativity.component.css']
})
export class NewActivityComponent implements OnInit {

	activity : Activity = new Activity();
	success : boolean = false;
	errors: String[] | null = [];
	user : User = new User();

	constructor(private router : Router, private activityService : ActivityService, private authService : AuthService) {

	}

	ngOnInit(): void {
		this.authService.getAuthenticatedUser().subscribe(response => {
            this.user = response;
        });
	}

    onSubmit() : void {
		this.activity.userId = this.user.userId;
		this.activityService.save(this.activity).subscribe(response => {
			this.success = true;
			this.errors = null;
			this.router.navigate(['/activity/list']);
		}, errorResponse => {
			this.success = false;
			this.errors = errorResponse.error.errors;
		});
    }

	backToList() : void {
		this.router.navigate(['/activity/list']);
	}
}