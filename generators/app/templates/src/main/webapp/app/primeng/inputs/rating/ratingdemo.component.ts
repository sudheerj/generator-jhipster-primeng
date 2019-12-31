import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-rating',
    templateUrl: './ratingdemo.component.html',
    styles: []
})
export class RatingDemoComponent implements OnInit {

    angular = 5;

    react: number;

    ember = 6;

    knockout = 2;

    vuejs = 3;

    types: SelectItem[];

    selectedType = 'readonly';

    activeIndex = 0;

    constructor(private messageService: MessageService) {
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
