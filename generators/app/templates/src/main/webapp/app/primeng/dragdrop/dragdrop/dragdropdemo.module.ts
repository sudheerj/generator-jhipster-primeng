import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';

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
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DragdropDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DragDropDemoModule {}
