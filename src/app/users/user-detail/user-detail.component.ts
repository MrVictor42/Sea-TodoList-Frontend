import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../model/users';
import { AuthService } from 'src/app/authentication';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	
	user : User = new User();
	errors: String[] | null = [];

	constructor(private userService : UserService, private authService : AuthService, private router : Router) {
		
	}

	ngOnInit(): void {
		this.authService.getAuthenticatedUser().subscribe(response => {
            this.user = response;
        });
	}

	onSubmit() : void {
		this.userService.update(this.user).subscribe(response => {
			this.errors = null;
			this.router.navigate(['/user/list']);
		}, errorResponse => {
			this.errors = errorResponse.error.errors;
		});
    }

	deleteUser() : void {
		this.userService.delete(this.user.userId).subscribe(response => {
			this.router.navigate(['/user/list']);
		});
	}

	backToList() : void {
		this.router.navigate(['/user/list']);
	}
}