import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	login : FormGroup;
	constructor(fb: FormBuilder) {
		this.login = fb.group({
			'username' : [null, Validators.required],
			'password' : [null, Validators.required]
		})
	}
	submitForm(value: any):void{
		console.log(value);
	}

	ngOnInit() {
	}
}
