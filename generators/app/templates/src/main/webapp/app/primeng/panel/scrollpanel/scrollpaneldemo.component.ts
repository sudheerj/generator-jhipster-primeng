import { Component, ViewEncapsulation} from '@angular/core';
import { MessageService } from 'primeng/api';

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
            border-right: 9px solid #757575;
            border-bottom: 9px solid #757575;
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

    activeIndex = 0;

    constructor(private messageService: MessageService) {
    }

    onChangeStep(label: string): void {
        this.messageService.add({severity: 'info', summary: label});
    }

}
