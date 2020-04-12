import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-steps',
    templateUrl: './stepsdemo.component.html',
    styles: [`
        .ui-steps .ui-steps-item {
            width: 25%;
        }

        .ui-steps .steps-custom {
            margin-bottom: 30px;
        }

        .ui-steps .steps-custom .ui-steps-item .ui-menuitem-link {
            height: 10px;
            padding: 0 1em;
        }

        .ui-steps .steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }

        .ui-steps .steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class StepsDemoComponent implements OnInit {
    activeIndexContainer = 0;
    activeIndex = 0;
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [];
        this.activeIndexContainer = 0;
    }

    ngOnInit(): void {
        this.items = [{
            label: 'Personal',
            command: (event: any) => {
                this.activeIndex = 0;
                this.messageService.add({severity: 'info', summary: 'First Step', detail: event.item.label});
            }
        },
            {
                label: 'Seat',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.messageService.add({severity: 'info', summary: 'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Payment',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.messageService.add({severity: 'info', summary: 'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.messageService.add({severity: 'info', summary: 'Last Step', detail: event.item.label});
                }
            }
        ];
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
