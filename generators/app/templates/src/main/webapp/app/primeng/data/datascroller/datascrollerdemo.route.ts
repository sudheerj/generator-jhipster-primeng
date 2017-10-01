import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { DataScrollerDemoComponent } from './datascrollerdemo.component';

export const datascrollerDemoRoute: Route = {
    path: 'datascroller',
    component: DataScrollerDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.datascroller.title'
    },
    canActivate: [UserRouteAccessService]
};
