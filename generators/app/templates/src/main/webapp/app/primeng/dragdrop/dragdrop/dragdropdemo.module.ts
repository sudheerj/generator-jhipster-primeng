import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {DragDropModule} from 'primeng/dragdrop';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
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
        ToastModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DragdropDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, DocumentService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>DragDropDemoModule {}
