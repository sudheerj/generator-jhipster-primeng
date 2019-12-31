import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';
import {EventService} from './service/event.service';
import {BrowserService} from "../dataview/service/browser.service";

@Component({
    selector: 'jhi-fullcalendar',
    templateUrl: './fullcalendardemo.component.html',
    styles: []
})
export class FullCalendarDemoComponent implements OnInit {
    activeIndex = 0;

    events: any[];

    options: any;

    header: any;

    constructor(private eventService: EventService, private messageService: MessageService) { }

    ngOnInit() {
        this.eventService.getEvents().subscribe((events: any) => {this.events = events.data; });

        this.options = {
            defaultDate: '2017-02-01',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true
        };
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

}
