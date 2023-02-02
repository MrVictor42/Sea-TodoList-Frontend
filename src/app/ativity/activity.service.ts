import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../model/activity';

import { environment } from '../../enviroments/enviroments';

@Injectable({
	providedIn: 'root'
})
export class ActivityService {

	activityBase : string = environment.baseApiURL + 'activity';

	constructor(private httpClient : HttpClient) {

	}

	save(activity : Activity) : Observable<Activity> {
		return this.httpClient.post<Activity>(`${ this.activityBase }/save`, activity);
	}

	getActivityList() : Observable<Activity[]> {
		return this.httpClient.get<Activity[]>(`${ this.activityBase }/list`);
	}

	getCurrentActivity(activityId : number) : Observable<Activity> {
		return this.httpClient.get<Activity>(`${ this.activityBase }/current_activity/${ activityId }`);
	}

	update(activity : Activity) : Observable<Activity> {
		return this.httpClient.put<Activity>(`${ this.activityBase }/update`, activity);
	}

	delete(activityId : number) : Observable<any> {
		return this.httpClient.delete(`${ this.activityBase }/delete/${ activityId }`);
	}
}