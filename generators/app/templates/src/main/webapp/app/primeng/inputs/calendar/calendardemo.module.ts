import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

// import needed PrimeNG modules here
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    CalendarDemoComponent,
    calendarDemoRoute
} from './';

const PRIMENG_STATES = [
    calendarDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        CalendarModule,
        GrowlModule,
        CheckboxModule,
        SelectButtonModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        CalendarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>CalendarDemoModule {}
