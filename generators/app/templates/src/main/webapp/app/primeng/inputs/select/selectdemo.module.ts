import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {SelectButtonModule} from 'primeng/selectbutton';
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
        <%= angularXAppName %>SharedModule,
        FormsModule,
        DropdownModule,
        MultiSelectModule,
        ToastModule,
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
export class <%= angularXAppName %>SelectDemoModule {}
