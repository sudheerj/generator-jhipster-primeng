import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
