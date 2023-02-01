import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity';

import { environment } from '../../enviroments/enviroments';

@Injectable({
	providedIn: 'root'
})
export class ActivityService {

	constructor(private httpClient : HttpClient) {

	}

	save(activity : Activity) : Observable<Activity> {
		return this.httpClient.post<Activity>(`${ environment.baseURLActivity }/save`, activity);
	}

	getActivityList() : Observable<Activity[]> {
		return this.httpClient.get<Activity[]>(`${ environment.baseURLActivity }/list`);
	}
}