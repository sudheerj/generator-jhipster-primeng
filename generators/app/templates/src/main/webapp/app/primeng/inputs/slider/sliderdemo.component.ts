import {Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
    selector: 'jhi-slider',
    templateUrl: './sliderdemo.component.html'
})
export class SliderDemoComponent implements OnInit {

    basicinput: number;

    customizedinput: number;

    eventsinput: number;

    disabledinput: number;

    sliderinput: number;

    animateinput: number;

    verticalinput: number;

    rangeValues: number[];

    types: SelectItem[];

    selectedType: string;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.basicinput = 0;
        this.customizedinput = 20;
        this.eventsinput = 0;
        this.disabledinput = 0;
        this.sliderinput = 0;
        this.animateinput = 0;
        this.verticalinput = 0;
        this.rangeValues = [30, 90];
        this.types = [];
        this.selectedType = 'readonly'
    }

    onChange(): void {
        this.messageService.add(
            {severity: 'info', summary: 'Slider value is changed'});
    }

    onSlideEnd(): void {
        this.messageService.add(
            {severity: 'info', summary: 'Slide end is reached'});
    }

    ngOnInit(): void {

        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});

    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }
}
