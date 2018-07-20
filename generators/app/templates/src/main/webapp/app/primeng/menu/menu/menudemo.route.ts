import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { MenuDemoComponent } from './menudemo.component';

export const menuDemoRoute: Route = {
    path: 'menu',
    component: MenuDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.menu.title'
    },
    canActivate: [UserRouteAccessService]
};
