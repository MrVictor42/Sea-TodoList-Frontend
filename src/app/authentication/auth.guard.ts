import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private authService: AuthService, private router: Router) {

	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const authenticated = this.authService.isAuthenticated();

		if (authenticated) {
			return true;
		} else {
			this.router.navigate(["/auth/login"])
			return false;
		}
	}

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
		const authenticated = this.authService.isAuthenticated();

		if (authenticated) {
			return true;
		} else {
			this.router.navigate(["/auth/login"])
			return false;
		}
	}
}
