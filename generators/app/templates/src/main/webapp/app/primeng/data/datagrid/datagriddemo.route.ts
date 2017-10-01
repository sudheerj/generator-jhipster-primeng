import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { DataGridDemoComponent } from './datagriddemo.component';

export const datagridDemoRoute: Route = {
    path: 'datagrid',
    component: DataGridDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.datagrid.title'
    },
    canActivate: [UserRouteAccessService]
};
