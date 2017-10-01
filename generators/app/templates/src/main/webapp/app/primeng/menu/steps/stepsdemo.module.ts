import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {StepsModule} from 'primeng/components/menu/menu';
import {ButtonModule} from 'primeng/components/button/button';
import {
    StepsDemoComponent,
    stepsDemoRoute
} from './';

const primeng_STATES = [
    stepsDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        StepsModule,
        GrowlModule,
        ButtonModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        StepsDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>StepsDemoModule {}
