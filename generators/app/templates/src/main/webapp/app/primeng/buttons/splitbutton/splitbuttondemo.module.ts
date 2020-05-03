import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {SplitButtonModule} from 'primeng/splitbutton';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

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
        ToastModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        SplitbuttonDemoComponent
    ],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>SplitbuttonDemoModule {}
