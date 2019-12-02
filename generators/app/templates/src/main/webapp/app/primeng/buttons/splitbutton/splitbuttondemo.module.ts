import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {SplitButtonModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {GrowlModule} from 'primeng/primeng';

import {
    SplitbuttonDemoComponent,
    splitbuttonDemoRoute
} from './';

const PRIMENG_STATES = [
    splitbuttonDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        SplitButtonModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        SplitbuttonDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>SplitbuttonDemoModule {}
