import {Component, OnInit} from '@angular/core';
import {JhiLanguageService} from 'ng-jhipster';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
    selector: 'jhi-captcha',
    templateUrl: './captchademo.component.html',
    styles: []
})
export class CaptchaDemoComponent implements OnInit {
    activeIndex = 0;

    ngOnInit() {

    }

    showResponse(event) {
    this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded'});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

    constructor(private messageService: MessageService) {
    }

}
