import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-list-ativity',
  templateUrl: './list-ativity.component.html',
  styleUrls: ['./list-ativity.component.css']
})
export class ListAtivityComponent implements OnInit {

	activities : Activity[] = [];

	constructor(private activityService : ActivityService) {

	}

	ngOnInit(): void {
		this.activityService.getActivityList().subscribe(response => {
			this.activities = response;
		});
	}
}