import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { TableDemoComponent } from './tabledemo.component';

export const tableDemoRoute: Route = {
    path: 'table',
    component: TableDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.table.title'
    },
    canActivate: [UserRouteAccessService]
};
