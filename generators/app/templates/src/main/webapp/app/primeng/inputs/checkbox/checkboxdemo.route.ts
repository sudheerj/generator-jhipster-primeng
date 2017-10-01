import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { CheckboxDemoComponent } from './checkboxdemo.component';

export const checkboxDemoRoute: Route = {
    path: 'checkbox',
    component: CheckboxDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.checkbox.title'
    },
    canActivate: [UserRouteAccessService]
};
