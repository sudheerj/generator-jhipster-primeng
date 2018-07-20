import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { ContextMenuDemoComponent } from './contextmenudemo.component';

export const contextmenuDemoRoute: Route = {
    path: 'contextmenu',
    component: ContextMenuDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.contextmenu.title'
    },
    canActivate: [UserRouteAccessService]
};
