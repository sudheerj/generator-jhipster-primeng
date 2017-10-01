import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem,Message} from 'primeng/components/common/api';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'jhi-terminal',
    templateUrl: './terminaldemo.component.html',
    styles: [],
    providers: [TerminalService]
})
export class TerminalDemoComponent implements OnInit {
    msgs: Message[] = [];
    messages: Message[] = [];
    activeIndex: number = 0;

    ngOnInit(){

    }

    subscription: Subscription;

    constructor(private terminalService: TerminalService) {
        this.terminalService.commandHandler.subscribe(command => {
            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            this.terminalService.sendResponse(response);
        });
    }

    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
