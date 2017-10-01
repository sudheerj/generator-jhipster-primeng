import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { RTLDemoComponent } from './rtldemo.component';

export const rtlDemoRoute: Route = {
    path: 'rtl',
    component: RTLDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.rtl.title'
    },
    canActivate: [UserRouteAccessService]
};
