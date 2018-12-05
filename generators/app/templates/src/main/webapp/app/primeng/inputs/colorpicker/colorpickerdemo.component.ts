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

    colorFormat1 = 'FF0000';

    colorFormat2 = '00FF00';

    colorFormat3 = '0000FF';

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
