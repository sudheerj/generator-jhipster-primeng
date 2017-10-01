import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { PanelMenuDemoComponent } from './panelmenudemo.component';

export const panelmenuDemoRoute: Route = {
    path: 'panelmenu',
    component: PanelMenuDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.menu.panelmenu.title'
    },
    canActivate: [UserRouteAccessService]
};
