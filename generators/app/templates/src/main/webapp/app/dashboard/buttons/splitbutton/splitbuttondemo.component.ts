import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem,Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-splitbutton',
    templateUrl: '../../buttons/splitbutton/splitbuttondemo.component.html',
    styles: []
})
export class SplitbuttonDemoComponent implements OnInit {
    items: MenuItem[];

    msgs: Message[] = [];

    ngOnInit() {
        this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
        ];
    }

    save() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data Saved'});
    }

    update() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data Updated'});
    }

    delete() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data Deleted'});
    }
}
