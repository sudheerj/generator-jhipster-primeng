import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { PanelDemoComponent } from './paneldemo.component';

export const panelDemoRoute: Route = {
    path: 'panel',
    component: PanelDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.panel.title'
    },
    canActivate: [UserRouteAccessService]
};
