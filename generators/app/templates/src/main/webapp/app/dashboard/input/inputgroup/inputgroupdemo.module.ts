import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {InputTextModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    InputGroupDemoComponent,
    inputGroupDemoRoute
} from './';

const DASHBOARD_STATES = [
    inputGroupDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        InputTextModule,
        WizardModule,
        RouterModule.forRoot(DASHBOARD_STATES, { useHash: true })
    ],
    declarations: [
        InputGroupDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>InputGroupDemoModule {}
