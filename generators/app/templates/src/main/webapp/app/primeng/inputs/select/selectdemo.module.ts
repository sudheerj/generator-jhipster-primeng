import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {CountryService} from './service/country.service';

import {
    SelectDemoComponent,
    selectDemoRoute
} from './';

const primeng_STATES = [
    selectDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        DropdownModule,
        MultiSelectModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        SelectDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>SelectDemoModule {}
