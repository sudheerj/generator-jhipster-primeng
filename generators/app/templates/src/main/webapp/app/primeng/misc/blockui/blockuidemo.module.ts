import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {BlockUIModule} from 'primeng/blockui';
import {ToastModule} from 'primeng/toast';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {MessageService} from 'primeng/api';

import {
    BlockUIDemoComponent,
    blockuiDemoRoute
} from './';

const PRIMENG_STATES = [
    blockuiDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule ,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        WizardModule,
        BlockUIModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        BlockUIDemoComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'}, MessageService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>BlockUIDemoModule {}
