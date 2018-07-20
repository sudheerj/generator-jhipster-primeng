import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { ToolbarDemoComponent } from './toolbardemo.component';

export const toolbarDemoRoute: Route = {
    path: 'toolbar',
    component: ToolbarDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.panel.toolbar.title'
    },
    canActivate: [UserRouteAccessService]
};
