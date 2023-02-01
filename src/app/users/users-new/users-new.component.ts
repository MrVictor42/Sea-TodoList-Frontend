import { Component, OnInit } from '@angular/core';
import { User } from '../users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-users-new',
	templateUrl: './users-new.component.html',
	styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
	 
	user : User = new User();
	success : boolean = false;
	errors: String[] | null = [];

	ngOnInit(): void {

	}

	constructor(private userService : UserService, private router : Router) {

	}

    onSubmit() : void {
		this.userService.save(this.user).subscribe(response => {
			this.success = true;
			this.errors = null;
			this.router.navigate(['/user-list']);
		}, errorResponse => {
			this.success = false;
			this.errors = errorResponse.error.errors;
		});
    }

	backToList() : void {
		this.router.navigate(['/user/list']);
	}
}