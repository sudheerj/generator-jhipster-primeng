import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
