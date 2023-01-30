import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersModule } from './users/users.module';
import { UserService } from './users/user.service';

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
		UsersModule,
		HttpClientModule
	],
	providers: [
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { 

}