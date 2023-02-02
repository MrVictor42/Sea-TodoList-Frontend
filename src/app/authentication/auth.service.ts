import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from '../model/users';

import { environment } from '../../enviroments/enviroments';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	loginBase : string = environment.baseApiURL + 'login';
	userBase : string = environment.baseApiURL + 'user';
	jwtHelper : JwtHelperService = new JwtHelperService();

	constructor(private http : HttpClient) {

	}

	logout() : void {
		localStorage.removeItem("access_token");
	}

	getToken() : any {
		const tokenString = localStorage.getItem("access_token")

		if(tokenString) {
			const token = JSON.parse(tokenString).access_token
			return token;
		} else {
			return null;
		}
	}

	getAuthenticatedUser() : Observable<User> {
		const token = this.getToken();

		if(token) {
			const tokenDecode = this.jwtHelper.decodeToken(token);
			return this.http.get<User>(`${ this.userBase }/current_user?username=${ tokenDecode.username }`);
		} else {
			return null!!;
		}
	}

	isAuthenticated() : boolean {
		const token = this.getToken();

		if(token) {
			const expired = this.jwtHelper.isTokenExpired(token);
			return !expired;
		}
		return false;
	}

	login(username : string, password: string) : Observable<any> {
		const params = new HttpParams().set("username", username).set("password", password);
		const headers = {
			"Content-Type" : "application/x-www-form-urlencoded"
		};

		return this.http.post(this.loginBase, params.toString(), { headers });
	}
}