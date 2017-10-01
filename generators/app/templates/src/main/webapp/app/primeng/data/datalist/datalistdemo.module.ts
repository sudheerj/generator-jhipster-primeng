import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {DataListModule} from 'primeng/components/datalist/datalist';
import {DialogModule} from 'primeng/components/dialog/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    DataListDemoComponent,
    datalistDemoRoute
} from './';

const primeng_STATES = [
    datalistDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        ButtonModule,
        DataListModule,
        DialogModule,
        BrowserAnimationsModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DataListDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>DataListDemoModule {}
