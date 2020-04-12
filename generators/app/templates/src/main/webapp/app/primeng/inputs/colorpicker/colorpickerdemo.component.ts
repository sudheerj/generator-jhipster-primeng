import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-colorpicker',
    templateUrl: './colorpickerdemo.component.html',
    styles: []
})
export class ColorpickerDemoComponent implements OnInit {
    color1: string;

    color2: string;

    color3: string;

    activeIndex = 0;

    colorFormat1: string;

    colorFormat2: string;

    colorFormat3: string;

    constructor(private messageService: MessageService) {
        this.color1 = '55ff66';
        this.color2 = '';
        this.color3 = '';
        this.colorFormat1 = 'FF0000';
        this.colorFormat2 = '00FF00';
        this.colorFormat3 = '0000FF';
    }

    onChangeColor(event: any): void {
        this.messageService.add({severity: 'info', summary: 'The new Color is selected ' + event.value});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {

    }
}
