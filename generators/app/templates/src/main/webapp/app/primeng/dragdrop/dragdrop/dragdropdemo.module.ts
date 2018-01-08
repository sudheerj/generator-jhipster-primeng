import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';
import {DocumentService} from './service/document.service';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    DragdropDemoComponent,
    dragdropDemoRoute
} from './';

const primeng_STATES = [
    dragdropDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        DragDropModule,
        DataTableModule,
        DataGridModule,
        PanelModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DragdropDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, DocumentService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DragDropDemoModule {}
