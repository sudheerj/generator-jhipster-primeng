import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { KeyFilterDemoComponent } from './keyfilterdemo.component';

export const keyFilterDemoRoute: Route = {
    path: 'keyfilter',
    component: KeyFilterDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.keyfilter.title'
    },
    canActivate: [UserRouteAccessService]
};
