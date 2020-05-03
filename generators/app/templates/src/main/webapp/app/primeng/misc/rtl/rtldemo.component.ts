import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'jhi-rtl',
    templateUrl: './rtldemo.component.html',
    styles: []
})
export class RTLDemoComponent implements OnInit {
    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {

    }

}
