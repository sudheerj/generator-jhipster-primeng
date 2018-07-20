import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { DataTableDemoComponent } from './datatabledemo.component';

export const datatableDemoRoute: Route = {
    path: 'datatable',
    component: DataTableDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.datatable.title'
    },
    canActivate: [UserRouteAccessService]
};
