import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {CountryService} from './service/country.service';

import {
    AutocompleteDemoComponent,
    autocompleteDemoRoute
} from './';

const primeng_STATES = [
    autocompleteDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        AutoCompleteModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        AutocompleteDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>AutoCompleteDemoModule {}
