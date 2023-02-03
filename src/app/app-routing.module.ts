import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
        { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
        { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }