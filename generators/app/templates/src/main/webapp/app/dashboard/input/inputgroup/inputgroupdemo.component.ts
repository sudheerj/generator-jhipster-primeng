import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-inputgroup',
    templateUrl: './inputgroupdemo.component.html',
    styles: []
})
export class InputGroupDemo {
    activeIndex: number = 0;

    msgs: Message[] = [];

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
