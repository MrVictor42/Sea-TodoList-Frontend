import { Component, OnInit } from '@angular/core';
import { User } from '../users';

@Component({
	selector: 'app-users-form',
	templateUrl: './users-form.component.html',
	styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
	 
	user : User = new User;
    urlPhoto : string = "../../../assets/images/avatar.jpg";
	eventSelected: any;

	ngOnInit(): void {

	}

	constructor() {

	}
}