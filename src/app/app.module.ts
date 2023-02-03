import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersModule } from './users/users.module';
import { UserService } from './users/user.service';
import { AtivityModule } from './ativity/ativity.module';
import { LoginComponent } from './login/login.component';

import { TokenInterceptor } from './authentication/token.interceptor';
import { AuthService } from './authentication/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivityService } from './ativity/activity.service';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LayoutComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TemplateModule,
		UsersModule,
		AtivityModule,
		HttpClientModule,
		FormsModule,
		TaskModule
	],
	providers: [
		AuthService, {
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		},
		UserService,
		ActivityService,
		TaskService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}