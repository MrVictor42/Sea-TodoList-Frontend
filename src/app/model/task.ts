import { Activity } from "./activity";

export class Task {
	[x: string]: any;
    taskId : number = 0;
    title : string = "";
    status : boolean = false;
    activityId : number = 0;
    activity : Activity = new Activity();
}