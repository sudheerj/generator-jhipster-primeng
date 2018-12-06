import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {TableModule} from 'primeng/components/table/table';
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
        <%= angularXAppName %>SharedModule,
        DragDropModule,
        TableModule,
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
export class <%= angularXAppName %>DragDropDemoModule {}
