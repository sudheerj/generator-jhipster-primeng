import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {ToastModule} from 'primeng/toast';
import {TerminalModule} from 'primeng/terminal';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    TerminalDemoComponent,
    terminalDemoRoute
} from './';

const primeng_STATES = [
    terminalDemoRoute];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastModule,
        TerminalModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TerminalDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>TerminalDemoModule {}
