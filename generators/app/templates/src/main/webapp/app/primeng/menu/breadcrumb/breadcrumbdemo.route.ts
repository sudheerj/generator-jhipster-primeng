import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { BreadcrumbDemoComponent } from './breadcrumbdemo.component';

export const breadcrumbDemoRoute: Route = {
    path: 'breadcrumb',
    component: BreadcrumbDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.breadcrumb.title'
    },
    canActivate: [UserRouteAccessService]
};
