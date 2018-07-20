import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { OrgChartDemoComponent } from './orgchartdemo.component';

export const orgchartDemoRoute: Route = {
    path: 'orgchart',
    component: OrgChartDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.orgchart.title'
    },
    canActivate: [UserRouteAccessService]
};
