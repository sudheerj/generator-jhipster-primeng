import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { InplaceDemoComponent } from './inplacedemo.component';

export const inplaceDemoRoute: Route = {
    path: 'inplace',
    component: InplaceDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.inplace.title'
    },
    canActivate: [UserRouteAccessService]
};
