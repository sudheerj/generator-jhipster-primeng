import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { ProgressSpinnerDemoComponent } from './progressspinnerdemo.component';

export const progressspinnerDemoRoute: Route = {
    path: 'progressspinner',
    component: ProgressSpinnerDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.progressspinner.title'
    },
    canActivate: [UserRouteAccessService]
};
