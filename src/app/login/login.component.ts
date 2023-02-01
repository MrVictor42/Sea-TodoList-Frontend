import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	username : string = "";
	password : string = "";
	loginError : boolean = false;
	registering : boolean = false;

	constructor(private router : Router) {

	}

	register(event : Event) : void {
		event.preventDefault();
		this.registering = true;
	}

	cancelRegister() {
		this.registering = false;
	}

	onSubmit() : void {
		this.router.navigate(['/home']);
	}
}