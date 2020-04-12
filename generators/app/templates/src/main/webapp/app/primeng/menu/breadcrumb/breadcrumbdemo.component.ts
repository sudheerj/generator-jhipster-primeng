import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-breadcrumb',
    templateUrl: './breadcrumbdemo.component.html',
    styles: []
})
export class BreadcrumbDemoComponent implements OnInit {
    home: MenuItem;
    activeIndex = 0;
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.home = {} as MenuItem;
        this.items = [];
    }

    ngOnInit(): void {
        this.items = [];
        this.items.push({
            label: 'Categories', command: event => {
                this.messageService.add({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'Best Buy', command: event => {
                this.messageService.add({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'TV & Video', command: event => {
                this.messageService.add({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'TVs', command: event => {
                this.messageService.add({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({
            label: 'Flat Panel TVs', command: event => {
                this.messageService.add({severity: 'info', summary: event.item.label});
            }
        });
        this.items.push({label: 'LED Flat-Panel', url: 'https://en.wikipedia.org/wiki/LED_display'});

        this.home = {
            label: 'Home', icon: 'pi pi-home', command: event => {
                this.messageService.add({severity: 'info', summary: 'Home'});
            }
        };
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
