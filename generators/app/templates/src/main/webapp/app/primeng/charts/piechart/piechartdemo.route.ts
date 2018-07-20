import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { PiechartDemoComponent } from '../../charts/piechart/piechartdemo.component';

export const piechartDemoRoute: Route = {
    path: 'piechart',
    component: PiechartDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.charts.piechart.title'
    },
    canActivate: [UserRouteAccessService]
};
