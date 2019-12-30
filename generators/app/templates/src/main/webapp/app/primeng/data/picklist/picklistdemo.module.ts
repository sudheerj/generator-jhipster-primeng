import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {PickListModule} from 'primeng/picklist';
import {CountryService} from './service/country.service';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    PicklistDemoComponent,
    picklistDemoRoute
} from './';

const primeng_STATES = [
    picklistDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        HttpClientModule,
        PickListModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],
    declarations: [
        PicklistDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>PickListDemoModule {}
