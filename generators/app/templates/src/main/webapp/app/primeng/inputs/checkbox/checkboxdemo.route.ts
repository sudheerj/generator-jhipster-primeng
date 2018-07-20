import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
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
