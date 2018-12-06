import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-panelmenu',
    templateUrl: './panelmenudemo.component.html',
    styles: []
})
export class PanelMenuDemoComponent implements OnInit {
    activeIndex = 0;
    msgs: Message[] = [];
    private items: MenuItem[];
    private expandeditems: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'fa fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ],
                    expanded : true
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ],
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

        this.expandeditems = [
            {
                label: 'File',
                icon: 'fa fa-file-o',
                items: [{
                    label: 'New',
                    icon: 'fa fa-plus',
                    items: [
                        {label: 'Project', expanded : true},
                        {label: 'Other', expanded : true},
                    ],
                    expanded : true
                },
                    {label: 'Open', expanded : true},
                    {label: 'Quit', expanded : true}
                ],
                expanded : true
            },
            {
                label: 'Edit',
                icon: 'fa fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-mail-reply'}
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
            },
            {
                label: 'Actions',
                icon: 'fa fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa fa-save'},
                            {label: 'Update', icon: 'fa fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }
    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }

}
