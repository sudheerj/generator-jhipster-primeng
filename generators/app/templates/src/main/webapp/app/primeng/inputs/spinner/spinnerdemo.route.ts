import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
