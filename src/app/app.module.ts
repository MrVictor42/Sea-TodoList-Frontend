import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersModule } from './users/users.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TemplateModule,
		UsersModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
