import {Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-password',
    templateUrl: './passworddemo.component.html',
    styles: []
})
export class PasswordDemoComponent implements OnInit {
    password: string;
    msgs: Message[] = [];
    activeIndex: number = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

    ngOnInit(){

    }
}
