import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../enviroments/enviroments';
import { Task } from '../model/task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	taskBase : string = environment.baseApiURL + 'task';

	constructor(private httpClient : HttpClient) { 

	}

	save(task : Task) : Observable<Task> {
		return this.httpClient.post<Task>(`${ this.taskBase }/save`, task);
	}

	update(task : Task) : Observable<Task> {
		return this.httpClient.put<Task>(`${ this.taskBase }/update`, task);
	}

	delete(taskId : number) : Observable<any> {
		return this.httpClient.delete(`${ this.taskBase }/delete/${ taskId }`);
	}

	getListTask(activityId : number) : Observable<Task[]> {
		return this.httpClient.get<Task[]>(`${ this.taskBase }/list/${ activityId }`);
	}

	getCurrentTask(taskId : number ) : Observable<Task> {
		return this.httpClient.get<Task>(`${ this.taskBase }/current_task/${ taskId }`);
	}
}