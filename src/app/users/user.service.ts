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

	getCurrentUser(userId : number) : Observable<User> {
		return this.httpClient.get<User>(`${ environment.baseURLUser }/current_user/${ userId }`);
	}

	update(user : User) : Observable<User> {
		return this.httpClient.put<any>(`${ environment.baseURLUser }/update`, user);
	}

	delete(userId : number) : Observable<any> {
		return this.httpClient.delete(`${ environment.baseURLUser }/delete/${ userId }`);
	}
}