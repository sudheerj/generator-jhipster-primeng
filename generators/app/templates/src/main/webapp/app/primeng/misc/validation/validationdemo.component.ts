import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService, SelectItem} from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
    selector: 'jhi-validation',
    templateUrl: './validationdemo.component.html',
    styles: []
})
export class ValidationDemoComponent implements OnInit {

    registrationform: FormGroup;

    submitted: boolean;

    genders: SelectItem[];

    address: string;

    constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    }

    ngOnInit() {
        this.registrationform = this.formBuilder.group({
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
            address: new FormControl(''),
            phone: new FormControl(''),
            gender: new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({label: 'Select Gender', value: ''});
        this.genders.push({label: 'Male', value: 'Male'});
        this.genders.push({label: 'Female', value: 'Female'});
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
    }

    get diagnostic() {
        return JSON.stringify(this.registrationform.value);
    }

}
