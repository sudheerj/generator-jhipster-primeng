import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { TabMenuDemoComponent } from './tabmenudemo.component';

export const tabmenuDemoRoute: Route = {
    path: 'tabmenu',
    component: TabMenuDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.tabmenu.title'
    },
    canActivate: [UserRouteAccessService]
};
