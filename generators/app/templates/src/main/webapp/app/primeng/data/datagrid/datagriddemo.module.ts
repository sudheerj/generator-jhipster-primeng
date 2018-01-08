import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {ButtonModule} from 'primeng/primeng';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';
import {DialogModule} from 'primeng/components/dialog/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {BrowserService} from './service/browser.service';

import {
    DataGridDemoComponent,
    datagridDemoRoute
} from './';

const primeng_STATES = [
    datagridDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        ButtonModule,
        DataGridModule,
        PanelModule,
        DialogModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DataGridDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DataGridDemoModule {}
