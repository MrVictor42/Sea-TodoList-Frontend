import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../enviroments/enviroments';
import { User } from '../model/users';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	userBase : string = environment.baseApiURL + 'user';

	constructor(private httpClient : HttpClient) {

	}

	save(user : User) : Observable<User> {
		return this.httpClient.post<User>(`${ this.userBase }/save`, user);
	}

	getUserList() : Observable<User[]> {
		return this.httpClient.get<User[]>(`${ this.userBase }/list`);
	}

	update(user : User) : Observable<User> {
		return this.httpClient.put<any>(`${ this.userBase }/update`, user);
	}

	delete(userId : number) : Observable<any> {
		return this.httpClient.delete(`${ this.userBase }/delete/${ userId }`);
	}
}