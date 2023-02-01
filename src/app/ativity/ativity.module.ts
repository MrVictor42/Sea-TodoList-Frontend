import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivityRoutingModule } from './ativity-routing.module';
import { NewActivityComponent } from './new-ativity/new-ativity.component';
import { FormsModule } from '@angular/forms';
import { ListAtivityComponent } from './list-ativity/list-ativity.component';

@NgModule({
	declarations: [
		NewActivityComponent,
  ListAtivityComponent
	],
	imports: [
		CommonModule,
		AtivityRoutingModule,
		FormsModule
	],
	exports: [
		NewActivityComponent
	]
})
export class AtivityModule { }