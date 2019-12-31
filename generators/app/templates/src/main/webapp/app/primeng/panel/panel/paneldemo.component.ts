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

    ngOnInit() {
        this.items = [
            {label: 'Showcase', icon: 'fa fa-briefcase', url: 'https://www.primefaces.org/primeng/'},
            {label: 'Github', icon: 'fa fa-github-square', url: 'https://github.com/primefaces/primeng'},
            {label: 'Forum', icon: 'fa fa-forumbee', url: 'https://forum.primefaces.org/viewforum.php?f=35'},
        ];
    }

    beforeToggle() {
        this.messageService.add(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.messageService.add(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    constructor(private messageService: MessageService) {
    }

}
