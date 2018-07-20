import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { LinechartDemoComponent } from '../../charts/linechart/linechartdemo.component';

export const linechartDemoRoute: Route = {
    path: 'linechart',
    component: LinechartDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.charts.linechart.title'
    },
    canActivate: [UserRouteAccessService]
};
