import {Component, OnInit } from '@angular/core';
import {MessageService, MenuItem} from 'primeng/api';

@Component({
    selector: 'jhi-panel',
    templateUrl: './paneldemo.component.html',
    styles: []
})
export class PanelDemoComponent implements OnInit {

    items: MenuItem[];

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.items = [];
    }

    ngOnInit(): void {
        this.items = [
            {label: 'Showcase', icon: 'fa fa-briefcase', url: 'https://www.primefaces.org/primeng/'},
            {label: 'Github', icon: 'fa fa-github-square', url: 'https://github.com/primefaces/primeng'},
            {label: 'Forum', icon: 'fa fa-forumbee', url: 'https://forum.primefaces.org/viewforum.php?f=35'},
        ];
    }

    beforeToggle(): void {
        this.messageService.add(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle(): void {
        this.messageService.add(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
