import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { StepsDemoComponent } from './stepsdemo.component';

export const stepsDemoRoute: Route = {
    path: 'steps',
    component: StepsDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.steps.title'
    },
    canActivate: [UserRouteAccessService]
};
