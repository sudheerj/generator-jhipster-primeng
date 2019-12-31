import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import { RouterModule } from '@angular/router';

import {
    ScrollPanelDemoComponent,
    scrollPanelDemoRoute
} from './';

const primeng_STATES = [
    scrollPanelDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        ScrollPanelModule,
        CodeHighlighterModule,
        ToastModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ScrollPanelDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class <%= angularXAppName %>ScrollPanelDemoModule {}
