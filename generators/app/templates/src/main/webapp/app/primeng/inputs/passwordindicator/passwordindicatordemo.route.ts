import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { PasswordIndicatorDemoComponent } from './passwordindicatordemo.component';

export const passwordindicatorDemoRoute: Route = {
    path: 'passwordindicator',
    component: PasswordIndicatorDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.passwordindicator.title'
    },
    canActivate: [UserRouteAccessService]
};
