import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
