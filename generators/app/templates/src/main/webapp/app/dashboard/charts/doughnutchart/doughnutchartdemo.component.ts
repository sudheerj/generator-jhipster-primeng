import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';

@Component({
    selector: 'jhi-piechart',
    templateUrl: '../../charts/doughnutchart/doughnutchartdemo.component.html',
    styles: []
})
export class DoughnutchartDemoComponent implements OnInit {
    data: any;

    constructor() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }
            ]
        };
    }

    ngOnInit() {
    }
}
