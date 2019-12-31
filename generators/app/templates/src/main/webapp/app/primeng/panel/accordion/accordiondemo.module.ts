import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import needed PrimeNG modules here
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    AccordionDemoComponent,
    accordionDemoRoute
} from './';

const primeng_STATES = [
    accordionDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserAnimationsModule,
        FormsModule,
        AccordionModule,
        ToastModule,
        CheckboxModule,
        SelectButtonModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        AccordionDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>AccordionDemoModule {}
