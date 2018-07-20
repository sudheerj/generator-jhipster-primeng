import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { GrowlDemoComponent } from './growldemo.component';

export const growlDemoRoute: Route = {
    path: 'growl',
    component: GrowlDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.messages.growl.title'
    },
    canActivate: [UserRouteAccessService]
};
