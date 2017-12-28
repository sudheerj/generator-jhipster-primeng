import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-slider',
    templateUrl: './sliderdemo.component.html',
    styles: []
})
export class SliderDemoComponent implements OnInit {
    msgs: Message[] = [];

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

    onChange() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'Slider value is changed'});
    }

    onSlideEnd() {
        this.msgs.length = 0;
        this.msgs.push(
            {severity: 'info', summary: 'Slide end is reached'});
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
