import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
	title = "Sorry, the page you are looking for does not exist!";
	constructor() { }

	ngOnInit() {
	}

}
