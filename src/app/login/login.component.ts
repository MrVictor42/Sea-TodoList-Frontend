import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication';
import { User } from '../model/users';
import { UserService } from '../users/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	user : User = new User();
	loginError : boolean = false;
	registering : boolean = false;
	errors: string[] = [];
	successMessage : string | null = "";

	constructor(private router : Router, private authService : AuthService, private userService : UserService) {

	}

	prepareRegister(event : Event) : void {
		event.preventDefault();
		this.registering = true;
	}

	cancelRegister() {
		this.registering = false;
	}

	onSubmit() : void {
		this.authService.login(this.user.username, this.user.password).subscribe(response => {
			const access_token = JSON.stringify(response);
			localStorage.setItem("access_token", access_token);
			this.router.navigate(['/activity/list'])
		}, errorResponse => {
			this.errors = ["Usuário e/ou senha incorretos."];
		});
	}

	register() : void {
		this.userService.save(this.user).subscribe(response => {
			this.successMessage = "Cadastro Realizado Com Sucesso! Efetue o Login."
			this.errors = [];
			this.registering = false;
			this.user = new User();
		}, errorResponse => {
			console.log(errorResponse)
			this.successMessage = null;
			this.errors = errorResponse.error.errors;
		});
	}
}