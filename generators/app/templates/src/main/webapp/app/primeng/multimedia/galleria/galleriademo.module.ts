import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {GalleriaModule} from 'primeng/galleria';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    GalleriaDemoComponent,
    galleriaDemoRoute
} from './';

const primeng_STATES = [
    galleriaDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastModule,
        GalleriaModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        GalleriaDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>GalleriaDemoModule {}
