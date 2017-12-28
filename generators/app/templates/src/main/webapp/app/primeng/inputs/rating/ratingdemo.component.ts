import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-rating',
    templateUrl: './ratingdemo.component.html',
    styles: []
})
export class RatingDemoComponent implements OnInit {
    msgs: Message[] = [];

    angular = 5;

    react: number;

    ember = 6;

    knockout = 2;

    vuejs = 3;

    types: SelectItem[];

    selectedType = 'readonly';

    activeIndex = 0;

    handleRate(event: any) {
        this.msgs.push(
            {severity: 'info', summary: 'You have rated with ' + event.value});
    }

    handleCancel(event: any) {
        this.msgs.push(
            {severity: 'info', summary: 'Rating is Cancelled'});
    }

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
