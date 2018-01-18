import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollPanelModule} from 'primeng/primeng';
import {ScrollPanelDemoComponent} from './scrollpaneldemo.component';
import {ScrollPanelDemoRoutingModule} from './scrollpaneldemo.route';
import {CodeHighlighterModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import { RouterModule } from '@angular/router';

import {
    ScrollPanelDemoComponent,
    scrollPanelDemoRoute
} from './';

const primeng_STATES = [
    scrollPanelDemoRoute
];

@NgModule({
	imports: [
        <%= angular2AppName %>SharedModule,
		CommonModule,
		ScrollPanelModule,
		ScrollPanelDemoRoutingModule,
        CodeHighlighterModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
	],
	declarations: [
        ScrollPanelDemoComponent
	]
})
export class <%= angular2AppName %>ScrollPanelDemoModule {}
