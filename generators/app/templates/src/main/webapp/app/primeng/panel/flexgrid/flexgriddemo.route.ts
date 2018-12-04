import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { FlexGridDemoComponent } from './flexgriddemo.component';

export const flexgridDemoRoute: Route = {
    path: 'flexgrid',
    component: FlexGridDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.flexgrid.title'
    },
    canActivate: [UserRouteAccessService]
};
