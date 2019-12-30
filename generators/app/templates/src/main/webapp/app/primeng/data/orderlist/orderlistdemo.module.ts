import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {OrderListModule} from 'primeng/orderlist';
import {CountryService} from './service/country.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    OrderlistDemoComponent,
    orderlistDemoRoute
} from './';

const primeng_STATES = [
    orderlistDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        OrderListModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],
    declarations: [
        OrderlistDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>OrderListDemoModule {}
