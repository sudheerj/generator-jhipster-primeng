import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {Message} from 'primeng/components/common/api';
import {ScoreService} from './service/score.service';
import Score from './service/score';
import {OverlayPanel} from 'primeng/components/overlaypanel/overlaypanel';

@Component({
    selector: 'jhi-overlaypanel',
    templateUrl: './overlaypaneldemo.component.html',
    styles: []
})
export class OverlayPanelDemoComponent implements OnInit {
    scores: Score[];

    marks: string;
    percentage: string;
    msgs: Message[] = [];
    activeIndex = 0;

    constructor(private scoreService: ScoreService) { }

    selectScore(event: any, score: Score, overlaypanel: OverlayPanel) {
        this.marks = score.marks;
        this.percentage = score.percentage;
        overlaypanel.toggle(event);
    }

    ngOnInit() {
        this.scoreService.getScores().subscribe((scores: any) => this.scores = scores.data);
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    onShow() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Show dialog', detail: 'Overlay shown'});
    }

    onHide() {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: 'Hide dialog', detail: 'Overlay hide'});
    }

}
