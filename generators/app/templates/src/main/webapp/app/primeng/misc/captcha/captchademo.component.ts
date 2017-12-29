import {Component, OnInit} from '@angular/core';
import {JhiLanguageService} from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-captcha',
    templateUrl: './captchademo.component.html',
    styles: []
})
export class CaptchaDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    ngOnInit() {

    }

    showResponse(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Succees', detail: 'User Responded'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
