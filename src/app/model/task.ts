import { Activity } from "./activity";

export class Task {
	[x: string]: any;
    taskId : number = 0;
    title : string = "";
    status : string = "";
    activityId : number = 0;
    activity : Activity = new Activity();
}