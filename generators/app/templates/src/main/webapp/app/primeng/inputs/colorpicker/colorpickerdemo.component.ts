import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-colorpicker',
    templateUrl: './colorpickerdemo.component.html',
    styles: []
})
export class ColorpickerDemoComponent implements OnInit {
    color1 = '55ff66';

    color2: string;

    color3: string;

    activeIndex = 0;

    colorFormat1 = 'FF0000';

    colorFormat2 = '00FF00';

    colorFormat3 = '0000FF';

    constructor(private messageService: MessageService) {
    }

    onChangeColor(event: any) {
        this.messageService.add({severity: 'info', summary: 'The new Color is selected ' + event.value});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit() {

    }
}
