import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { InputTextAreaDemoComponent } from './inputtextareademo.component';

export const inputTextAreaDemoRoute: Route = {
    path: 'inputtextarea',
    component: InputTextAreaDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.inputtextarea.title'
    },
    canActivate: [UserRouteAccessService]
};
