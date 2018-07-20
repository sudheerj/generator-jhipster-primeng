import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { TieredMenuDemoComponent } from './tieredmenudemo.component';

export const tieredmenuDemoRoute: Route = {
    path: 'tieredmenu',
    component: TieredMenuDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.tieredmenu.title'
    },
    canActivate: [UserRouteAccessService]
};
