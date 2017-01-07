import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title = 'Welcome to Sportrakker!';
	description = 'Sportrakker is a prep sports suite that adds cross sport statistical tracking for highschool students, as well as serving as a meet hosting software providing realtime live update of prep sporting events.';
	constructor() { }

	ngOnInit() {
	}

}
