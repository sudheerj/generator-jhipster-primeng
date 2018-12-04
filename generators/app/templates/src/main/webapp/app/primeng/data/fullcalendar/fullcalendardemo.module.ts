import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared';
import {FullCalendarModule} from 'primeng/components/fullcalendar/fullcalendar';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/components/button/button';

import {EventService} from './service/event.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    FullCalendarDemoComponent,
    fullcalendarDemoRoute
} from './';

const primeng_STATES = [
    fullcalendarDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ButtonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FullCalendarModule,
        RadioButtonModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, EventService],
    declarations: [
        FullCalendarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>FullCalendarDemoModule {}
