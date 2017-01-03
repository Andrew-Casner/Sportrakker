import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-new-meet',
	templateUrl: './new-meet.component.html',
	styleUrls: ['./new-meet.component.css']
})
export class NewMeetComponent implements OnInit {
	newMeetForm : FormGroup;
	constructor(fb: FormBuilder) {
		this.newMeetForm = fb.group({
			'meetName' : [null, Validators.required],
			'meetDescription' : [null, Validators.required],
			'meetLocation' : [null, Validators.required],
			'meetDuration' : [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/)])]
			
		})
	}
	submitForm(value: any):void{
		console.log(value);
	}

	ngOnInit() {

	}

}
