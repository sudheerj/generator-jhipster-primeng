import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { SelectDemoComponent } from './selectdemo.component';

export const selectDemoRoute: Route = {
    path: 'select',
    component: SelectDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.select.title'
    },
    canActivate: [UserRouteAccessService]
};
