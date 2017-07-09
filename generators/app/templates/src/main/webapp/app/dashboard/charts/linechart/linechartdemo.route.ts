import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { LinechartDemoComponent } from '../../charts/linechart/linechartdemo.component';

export const linechartDemoRoute: Route = {
    path: 'linechart',
    component: LinechartDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'dashboard.charts.linechart.title'
    },
    canActivate: [UserRouteAccessService]
};
