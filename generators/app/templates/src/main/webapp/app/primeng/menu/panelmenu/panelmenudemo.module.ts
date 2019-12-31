import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {ToastModule} from 'primeng/toast';
import {PanelMenuModule} from 'primeng/panelmenu';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    PanelMenuDemoComponent,
    panelmenuDemoRoute
} from './';

const primeng_STATES = [
    panelmenuDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        PanelMenuModule,
        ToastModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        PanelMenuDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>PanelMenuDemoModule {}
