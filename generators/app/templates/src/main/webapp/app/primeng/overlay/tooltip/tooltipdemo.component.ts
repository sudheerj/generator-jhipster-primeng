import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-tooltip',
    templateUrl: './tooltipdemo.component.html',
    styles: []
})
export class TooltipDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit() {}
}
