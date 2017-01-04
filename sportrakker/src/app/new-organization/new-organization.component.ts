import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

@Component({
	selector: 'app-new-organization',
	templateUrl: './new-organization.component.html',
	styleUrls: ['./new-organization.component.css']
})
export class NewOrganizationComponent implements OnInit {
	newOrgForm : FormGroup;
	constructor(fb: FormBuilder) {
		this.newOrgForm = fb.group({
			// Basic info
			'name' : [null, Validators.required],
			'type' : [null, Validators.required],
			'district' : [null, Validators.required],
			// Location
			'address1' : [null, Validators.required],
			'address2' : '',
			'zip' : [null, Validators.required],
			'state' : [null, Validators.required],
			// Contact info
			'phone' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/^\d+$/)])],
			'athleticDirectorNameF' : [null, Validators.required],
			'athleticDirectorNameL' : [null, Validators.required],
			'athleticDirectorEmail' : [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])]
			// Advanced info
			
		})
	}
	submitForm(value: any):void{
		console.log(value);
	}

	ngOnInit() {

	}

}
