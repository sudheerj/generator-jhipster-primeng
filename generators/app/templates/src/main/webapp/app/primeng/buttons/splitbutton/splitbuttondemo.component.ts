import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-splitbutton',
    templateUrl: './splitbuttondemo.component.html',
    styles: []
})
export class SplitbuttonDemoComponent implements OnInit {

    items: MenuItem[];
    itemsIcons: MenuItem[];

    activeIndex = 0;

    constructor(private messageService: MessageService) {
        this.items = [];
        this.itemsIcons = [];
    }

    ngOnInit(): void {
        this.items = [
            {label: 'Update', command: () => {
                this.update();
            }},
            {label: 'Delete', command: () => {
                this.delete();
            }},
            {label: 'AngularConnect', url: 'https://www.angularconnect.com'}
        ];

        this.itemsIcons = [
            {label: 'Update', icon: 'pi pi-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'pi pi-times', command: () => {
                this.delete();
            }},
            {label: 'AngularConnect', icon: 'pi pi-info', url: 'https://www.angularconnect.com'}
        ];
    }

    create(): void {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'AngularConnect user account is created'});
    }

    update(): void {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'AngularConnect user account is updated'});
    }

    delete(): void {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'AngularConnect user account is deleted'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
