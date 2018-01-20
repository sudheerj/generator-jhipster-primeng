import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    CardDemoComponent,
    cardDemoRoute
} from './';

const primeng_STATES = [
    cardDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        BrowserAnimationsModule,
        FormsModule,
        CardModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        CardDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>CardDemoModule {}
