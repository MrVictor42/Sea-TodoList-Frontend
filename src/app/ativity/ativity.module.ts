import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivityRoutingModule } from './ativity-routing.module';
import { NewActivityComponent } from './new-ativity/new-ativity.component';
import { FormsModule } from '@angular/forms';
import { ListAtivityComponent } from './list-ativity/list-ativity.component';
import { EditAtivityComponent } from './edit-ativity/edit-ativity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';

@NgModule({
	declarations: [
		NewActivityComponent,
		ListAtivityComponent,
		EditAtivityComponent,
		DetailActivityComponent
	],
	imports: [
		CommonModule,
		AtivityRoutingModule,
		FormsModule
	],
	exports: [
		NewActivityComponent,
		ListAtivityComponent,
		EditAtivityComponent,
		DetailActivityComponent
	]
})
export class AtivityModule { }