import { Component, OnInit, OnDestroy } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';
import {TerminalService} from 'primeng/terminal/terminalservice';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'jhi-terminal',
    templateUrl: './terminaldemo.component.html',
    styles: [],
    providers: [TerminalService]
})
export class TerminalDemoComponent implements OnInit, OnDestroy {
    activeIndex = 0;
    subscription: Subscription;

    ngOnInit() {}

    constructor(private terminalService: TerminalService, private messageService: MessageService) {
        this.terminalService.commandHandler.subscribe(command => {
            const response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
        this.subscription = null;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
