import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-tabmenu',
    templateUrl: './tabmenudemo.component.html',
    styles: []
})
export class TabMenuDemoComponent implements OnInit {
    activeIndex = 0;
    activeItem: MenuItem;
    msgs: Message[] = [];
    private items: MenuItem[];
    private expandeditems: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Overview', icon: 'fa-bar-chart', routerLink: ['/pages/overview']},
            {label: 'Showcase', icon: 'fa-calendar', command: (event) => {
                this.msgs.length = 0;
                this.msgs.push({severity: 'info', summary: 'PrimeNG Showcase', detail: 'Navigate all components'});
            }},
            {label: 'Documentation', icon: 'fa-book', url: 'https://www.primefaces.org/documentation/'},
            {label: 'Downloads', icon: 'fa-download', routerLink: ['/pages/downloads']},
            {label: 'Support', icon: 'fa-support', url: 'https://www.primefaces.org/support/'},
            {label: 'Social', icon: 'fa-twitter', url: 'https://twitter.com/prime_ng'},
            {label: 'License', icon: 'fa-twitter', url: 'https://www.primefaces.org/license/'}
        ];
        this.activeItem = this.items[2];
    }
    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
