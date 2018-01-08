import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'primeng/components/rating/rating';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
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
        <%= angular2AppName %>SharedModule,
        FormsModule,
        RatingModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        RatingDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>RatingDemoModule {}
