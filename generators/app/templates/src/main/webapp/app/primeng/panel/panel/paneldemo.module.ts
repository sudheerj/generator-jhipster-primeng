import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    PanelDemoComponent,
    panelDemoRoute
} from './';

const PRIMENG_STATES = [
    panelDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserAnimationsModule,
        FormsModule,
        PanelModule,
        GrowlModule,
        SplitButtonModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        PanelDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>PanelDemoModule {}
