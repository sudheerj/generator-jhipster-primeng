import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-slider',
    templateUrl: './sliderdemo.component.html'
})
export class SliderDemoComponent implements OnInit {

    basicinput: number;

    custominput = 20;

    eventsinput: number;

    disabledinput: number;

    sliderinput: number;

    animateinput: number;

    verticalinput: number;

    rangeValues: number[] = [30, 90];

    types: SelectItem[];

    selectedType = 'readonly';

    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    onChange() {
        this.messageService.add(
            {severity: 'info', summary: 'Slider value is changed'});
    }

    onSlideEnd() {
        this.messageService.add(
            {severity: 'info', summary: 'Slide end is reached'});
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
