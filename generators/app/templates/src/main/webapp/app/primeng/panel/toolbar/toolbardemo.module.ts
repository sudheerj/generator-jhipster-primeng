import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


// import needed PrimeNG modules here

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {ToolbarModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    ToolbarDemoComponent,
    toolbarDemoRoute
} from './';

const primeng_STATES = [
    toolbarDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ToolbarModule,
        InputTextModule,
        SplitButtonModule,
        ButtonModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ToolbarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>ToolbarDemoModule {}
