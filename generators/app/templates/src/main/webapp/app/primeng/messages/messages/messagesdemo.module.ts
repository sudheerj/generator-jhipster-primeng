import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ButtonModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    MessagesDemoComponent,
    messagesDemoRoute
} from './';

const PRIMENG_STATES = [
    messagesDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ButtonModule,
        MessagesModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        MessagesDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>MessagesDemoModule {}
