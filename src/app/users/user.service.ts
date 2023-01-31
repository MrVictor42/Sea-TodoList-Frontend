import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../enviroments/enviroments';
import { User } from './users';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private httpClient : HttpClient) {

	}

	save(user : User) : Observable<User> {
		return this.httpClient.post<User>(`${ environment.baseURLUser }/save`, user);
	}

	getUserList() : Observable<User[]> {
		return this.httpClient.get<User[]>(`${ environment.baseURLUser }/list`);
	}

	getUser() : User {
		const user : User = new User();

		return user;
	}
}