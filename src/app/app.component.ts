import { Component, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html', 
	styleUrls: ['./app.component.css'],
	styles: []
})
export class AppComponent implements AfterViewInit {
	
	ngAfterViewInit(): void {
		(function($) {
			"use strict";
		
			var path = window.location.href; 
				$("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
					if (this instanceof HTMLAnchorElement && this.href === path) {
						$(this).addClass("active");
					}
				});
		
			$("#sidebarToggle").on("click", function(e) {
				e.preventDefault();
				$("body").toggleClass("sb-sidenav-toggled");
			});
		})(jQuery);
	}
	title = 'sea-todo-list';
}