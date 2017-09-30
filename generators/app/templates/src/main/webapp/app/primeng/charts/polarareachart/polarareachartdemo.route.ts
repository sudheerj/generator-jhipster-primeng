import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { PolarareachartDemoComponent } from '../../charts/polarareachart/polarareachartdemo.component';

export const polarareachartDemoRoute: Route = {
    path: 'polarareachart',
    component: PolarareachartDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.charts.polarareachart.title'
    },
    canActivate: [UserRouteAccessService]
};
