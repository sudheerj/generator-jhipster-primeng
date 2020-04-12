import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-tabmenu',
    templateUrl: './tabmenudemo.component.html',
    styles: []
})
export class TabMenuDemoComponent implements OnInit {
    activeIndex = 0;
    activeItem: MenuItem;
    private items: MenuItem[];
    private expandeditems: MenuItem[];

    constructor(private messageService: MessageService) {
        this.activeItem = null;
        this.items = [];
        this.expandeditems = [];
    }

    ngOnInit(): void {
        this.items = [
            {label: 'Overview', icon: 'fa fa-bar-chart', routerLink: ['/pages/overview']},
            {label: 'Showcase', icon: 'fa fa-calendar', command: () => {
                this.messageService.add({severity: 'info', summary: 'PrimeNG Showcase', detail: 'Navigate all components'});
            }},
            {label: 'Documentation', icon: 'fa fa-book', url: 'https://www.primefaces.org/documentation/'},
            {label: 'Downloads', icon: 'fa fa-download', routerLink: ['/pages/downloads']},
            {label: 'Support', icon: 'fa fa-support', url: 'https://www.primefaces.org/support/'},
            {label: 'Social', icon: 'fa fa-twitter', url: 'https://twitter.com/prime_ng'},
            {label: 'License', icon: 'fa fa-twitter', url: 'https://www.primefaces.org/license/'}
        ];
        this.activeItem = this.items[2];
    }
    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
