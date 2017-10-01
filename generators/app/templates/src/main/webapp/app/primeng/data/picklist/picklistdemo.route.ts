import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { PicklistDemoComponent } from './picklistdemo.component';

export const picklistDemoRoute: Route = {
    path: 'picklist',
    component: PicklistDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.picklist.title'
    },
    canActivate: [UserRouteAccessService]
};
