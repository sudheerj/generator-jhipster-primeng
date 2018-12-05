import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {VirtualScrollerModule} from 'primeng/components/virtualscroller/virtualscroller';
import {ButtonModule} from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';
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
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        VirtualScrollerDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>VirtualScrollerDemoModule {}
