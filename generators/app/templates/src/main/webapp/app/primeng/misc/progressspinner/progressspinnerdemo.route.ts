import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
