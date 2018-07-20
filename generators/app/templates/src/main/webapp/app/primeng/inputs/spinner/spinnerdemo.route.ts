import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { SpinnerDemoComponent } from './spinnerdemo.component';

export const spinnerDemoRoute: Route = {
    path: 'spinner',
    component: SpinnerDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.spinner.title'
    },
    canActivate: [UserRouteAccessService]
};
