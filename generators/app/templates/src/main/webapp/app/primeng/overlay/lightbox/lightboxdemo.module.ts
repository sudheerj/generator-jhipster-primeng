import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {LightboxModule} from 'primeng/components/lightbox/lightbox';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    LightboxDemoComponent,
    lightboxDemoRoute
} from './';

const primeng_STATES = [
    lightboxDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        LightboxModule,
        GrowlModule,
        BrowserAnimationsModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        LightboxDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>LightboxDemoModule {}
