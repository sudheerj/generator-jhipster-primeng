import {Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-editor',
    templateUrl: './editordemo.component.html',
    styles: []
})
export class EditorDemoComponent implements OnInit {

    basictext: string;

    eventstext: string;

    customtext: string;

    readonlytext: string ;

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.basictext = '<div>Hello Angular Folks!</div><div>Get ready to play with PrimeNG <b>Editor</b></div><div><br></div>';
        this.eventstext = 'PrimeNG <b>Editor</b> supports <b>onTextChange</b> and <b>onSelectionChange</b> events.';
        this.customtext = 'PrimeNG <b>Editor</b> toolbar is customized by defining elements inside header.';
        this.readonlytext = 'PrimeNG <b>Editor</b> is rich text editor component based on <i>Quill</i> Edtior 1.0.';
    }

    onTextChange(): void {
        this.messageService.add(
            {severity: 'info', summary: 'The editor text is changed'});
    }

    onSelectionChange(): void {
        this.messageService.add(
            {severity: 'info', summary: 'The editor selected text is changed'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

    ngOnInit(): void {}
}
