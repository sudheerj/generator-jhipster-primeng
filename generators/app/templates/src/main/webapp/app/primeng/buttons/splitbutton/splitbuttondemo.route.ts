import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { SplitbuttonDemoComponent } from './splitbuttondemo.component';

export const splitbuttonDemoRoute: Route = {
    path: 'splitbutton',
    component: SplitbuttonDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.buttons.splitbutton.title'
    },
    canActivate: [UserRouteAccessService]
};
