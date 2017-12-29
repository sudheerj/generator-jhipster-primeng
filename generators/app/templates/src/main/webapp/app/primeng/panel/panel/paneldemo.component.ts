import {Component, OnInit } from '@angular/core';
import {Message, MenuItem} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-panel',
    templateUrl: './paneldemo.component.html',
    styles: []
})
export class PanelDemoComponent implements OnInit {
    msgs: Message[] = [];

    items: MenuItem[];

    activeIndex = 0;

    ngOnInit() {
        this.items = [
            {label: 'Showcase', icon: 'fa-briefcase', url: 'https://www.primefaces.org/primeng/'},
            {label: 'Github', icon: 'fa-github-square', url: 'https://github.com/primefaces/primeng'},
            {label: 'Forum', icon: 'fa-forumbee', url: 'https://forum.primefaces.org/viewforum.php?f=35'},
        ];
    }

    beforeToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'Before toggle the content'});
    }

    afterToggle() {
        this.msgs = [];
        this.msgs.push(
            {severity: 'info', summary: 'After toggle the content'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
