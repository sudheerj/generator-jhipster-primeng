import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-menubar',
    templateUrl: './menubardemo.component.html',
    styles: []
})
export class MenuBarDemoComponent implements OnInit {
    activeIndex = 0;
    msgs: Message[] = [];
    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'fa fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa fa-plus',
                    items: [
                        {label: 'File'},
                        {label: 'Directory'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Close'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa fa-edit',
                items: [
                    {label: 'Cut', icon: 'fa fa-cut'},
                    {label: 'Copy', icon: 'fa fa-copy'},
                    {label: 'Paste', icon: 'fa fa-paste'},
                    {label: 'Undo', icon: 'fa fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-mail-reply'},
                    {label: 'Find', icon: 'fa fa-search', items: [
                        {label: 'Find Next'},
                        {label: 'Find Previous'},
                    ]}
                ]
            },
            {
                label: 'View',
                icon: 'fa fa-question',
                items: [
                    {
                        label: ''
                    },
                    {
                        label: 'Tool windows',
                        icon: 'fa fa-search',
                        items: [
                            {
                                label: 'Project',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'Run'
                            }
                        ]}
                ]
            },
            {
                label: 'Help',
                icon: 'fa fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]}
                ]
            }
        ];
    }
    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
