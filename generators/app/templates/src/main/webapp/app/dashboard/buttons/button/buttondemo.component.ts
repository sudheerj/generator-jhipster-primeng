import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'jhi-button',
    templateUrl: '../../buttons/button/buttondemo.component.html',
    styles: []
})
export class ButtonDemoComponent implements OnInit {
    clicks: number = 0;

    count() {
        this.clicks++;
    }

    ngOnInit() {
    }
}
