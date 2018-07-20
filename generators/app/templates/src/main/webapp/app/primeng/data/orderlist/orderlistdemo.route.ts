import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { OrderlistDemoComponent } from './orderlistdemo.component';

export const orderlistDemoRoute: Route = {
    path: 'orderlist',
    component: OrderlistDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.orderlist.title'
    },
    canActivate: [UserRouteAccessService]
};
