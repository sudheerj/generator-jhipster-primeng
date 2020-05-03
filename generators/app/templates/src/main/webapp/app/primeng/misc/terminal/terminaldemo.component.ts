import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import {TerminalService} from 'primeng';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
    selector: 'jhi-terminal',
    templateUrl: './terminaldemo.component.html',
    styles: [],
    providers: [TerminalService]
})
export class TerminalDemoComponent implements OnInit, OnDestroy {
    activeIndex = 0;
    subscription: Subscription;

    constructor(private terminalService: TerminalService, private messageService: MessageService) {
        this.terminalService.commandHandler.subscribe((command: string) => {
            const response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
        this.subscription = {} as Subscription;
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
