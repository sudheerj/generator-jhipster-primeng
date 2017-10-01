import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {OrderListModule} from 'primeng/components/orderlist/orderlist';
import {GrowlModule} from 'primeng/components/growl/growl';

import {CountryService} from './section/service/country.service';


import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    OrderlistDemoComponent,
    orderlistDemoRoute
} from './';

const primeng_STATES = [
    orderlistDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        OrderListModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},CountryService],
    declarations: [
        OrderlistDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>OrderListDemoModule {}
