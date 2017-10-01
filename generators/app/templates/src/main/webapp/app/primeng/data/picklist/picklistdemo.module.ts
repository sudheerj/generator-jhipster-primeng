import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {PickListModule} from 'primeng/components/picklist/picklist';
import {GrowlModule} from 'primeng/components/growl/growl';
import {CountryService} from './section/service/country.service';


import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    PicklistDemoComponent,
    picklistDemoRoute
} from './';

const primeng_STATES = [
    picklistDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        HttpModule,
        PickListModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'},CountryService],
    declarations: [
        PicklistDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>PickListDemoModule {}
