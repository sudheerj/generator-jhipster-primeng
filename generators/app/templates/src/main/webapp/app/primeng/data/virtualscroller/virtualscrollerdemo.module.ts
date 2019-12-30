import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {BrowserService} from './service/browser.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {
    VirtualScrollerDemoComponent,
    virtualscrollerDemoRoute
} from './';

const primeng_STATES = [
    virtualscrollerDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        VirtualScrollerModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        DropdownModule,
        InputTextModule,
        WizardModule,
        ToastModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        VirtualScrollerDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>VirtualScrollerDemoModule {}
