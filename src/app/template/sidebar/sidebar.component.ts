import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/authentication';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    
    user : User = new User();

    constructor(private authService : AuthService, private router : Router) {
        
    }

    ngOnInit(): void {
        this.authService.getAuthenticatedUser().subscribe(response => {
            this.user = response;
        });
    }

    logout() : void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
