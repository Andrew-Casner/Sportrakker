import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
			'address2' : [null, Validators.required],
			'zip' : [null, Validators.required],
			'state' : [null, Validators.required],
			// Contact info
			'phone' : [null, Validators.required],
			'athleticDirectorEmail' : [null, Validators.required],
			// Advanced info
			'class' : [null, Validators.required]
			
		})
	}
	submitForm(value: any):void{
		console.log(value);
	}

	ngOnInit() {

	}

}
