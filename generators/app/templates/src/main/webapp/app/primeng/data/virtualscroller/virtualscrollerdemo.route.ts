import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { VirtualScrollerDemoComponent } from './virtualscrollerdemo.component';

export const virtualscrollerDemoRoute: Route = {
    path: 'virtualscroller',
    component: VirtualScrollerDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.virtualscroller.title'
    },
    canActivate: [UserRouteAccessService]
};
