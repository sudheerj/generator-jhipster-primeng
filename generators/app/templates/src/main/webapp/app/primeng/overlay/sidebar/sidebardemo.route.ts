import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { SideBarDemoComponent } from './sidebardemo.component';

export const sidebarDemoRoute: Route = {
    path: 'sidebar',
    component: SideBarDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.overlay.sidebar.title'
    },
    canActivate: [UserRouteAccessService]
};
