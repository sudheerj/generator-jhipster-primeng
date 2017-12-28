import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-colorpicker',
    templateUrl: './colorpickerdemo.component.html',
    styles: []
})
export class ColorpickerDemoComponent implements OnInit {
    msgs: Message[] = [];
    color1 = '55ff66';

    color2: string;

    color3: string;

    activeIndex = 0;

    colorFormat1: string;

    colorFormat2: string;

    colorFormat3: string;

    onChangeColor(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The new Color is selected ' + event.value});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
