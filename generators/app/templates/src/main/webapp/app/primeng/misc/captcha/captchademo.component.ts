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

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {}

    showResponse(event): void {
    this.messageService.add({severity: 'info', summary: 'Succees', detail: 'User Responded'});
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
