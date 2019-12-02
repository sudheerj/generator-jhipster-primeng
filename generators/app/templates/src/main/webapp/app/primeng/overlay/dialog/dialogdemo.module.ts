import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    DialogDemoComponent,
    dialogDemoRoute
} from './';

const PRIMENG_STATES = [
    dialogDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ButtonModule,
        DialogModule,
        GrowlModule,
        BrowserAnimationsModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        DialogDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>DialogDemoModule {}
