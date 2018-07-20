import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { MenuBarDemoComponent } from './menubardemo.component';

export const menubarDemoRoute: Route = {
    path: 'menubar',
    component: MenuBarDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.menubar.title'
    },
    canActivate: [UserRouteAccessService]
};
