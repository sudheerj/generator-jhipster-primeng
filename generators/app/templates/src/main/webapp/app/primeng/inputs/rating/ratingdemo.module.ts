import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import {SelectButtonModule} from 'primeng/selectbutton';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    RatingDemoComponent,
    ratingDemoRoute
} from './';

const primeng_STATES = [
    ratingDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        RatingModule,
        ToastModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        RatingDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>RatingDemoModule {}
