import { Component, OnInit } from '@angular/core';
import { User } from '../../model/users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-users-new',
	templateUrl: './users-new.component.html',
	styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
	 
	user : User = new User();
	errors: String[] | null = [];

	ngOnInit(): void {

	}

	constructor(private userService : UserService, private router : Router) {

	}

    onSubmit() : void {
		this.userService.save(this.user).subscribe(response => {
			this.errors = null;
			this.router.navigate(['/user-list']);
		}, errorResponse => {
			this.errors = errorResponse.error.errors;
		});
    }

	backToList() : void {
		this.router.navigate(['/user/list']);
	}
}