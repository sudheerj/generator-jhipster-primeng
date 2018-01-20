import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    templateUrl: './scrollpaneldemo.component.html',
    styles: [`
        .custombar1 .ui-scrollpanel-wrapper {
            border-right: 9px solid #f4f4f4;
        }

        .custombar1 .ui-scrollpanel-bar {
            background-color: #1976d2;
            opacity: 1;
            transition: background-color .3s;
        }

        .custombar1 .ui-scrollpanel-bar:hover {
            background-color: #135ba1;
        }

        .custombar2 .ui-scrollpanel-wrapper {
            border-right: 9px solid #000000;
        }

        .custombar2 .ui-scrollpanel-bar {
            background-color: #68C77D;
            border-radius: 0;
            opacity: 1;
            transition: background-color .3s;
        }

        .custombar2:hover .ui-scrollpanel-bar {
            background-color: #46A55A;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class ScrollPanelDemoComponent {
    msgs: Message[] = [];

    activeIndex = 0;

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
