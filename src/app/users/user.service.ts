import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './users';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private httpClient : HttpClient) {

	}

	getUser() : User {
		const user : User = new User();

		return user;
	}
}