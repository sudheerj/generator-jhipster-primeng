import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-rating',
    templateUrl: './ratingdemo.component.html',
    styles: []
})
export class RatingDemoComponent implements OnInit {

    angular: number;

    react: number;

    ember: number;

    knockout: number;

    vuejs: number;

    types: SelectItem[];

    selectedType: string;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.angular = 9;
        this.react = 0;
        this.ember = 6;
        this.knockout =2;
        this.vuejs = 3;
        this.types = [];
        this.selectedType = '';
    }

    handleRate(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'You have rated with ' + event.value});
    }

    handleCancel(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'Rating is Cancelled'});
    }

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}
