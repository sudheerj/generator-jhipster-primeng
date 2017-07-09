import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { SplitbuttonDemoComponent } from '../../buttons/splitbutton/splitbuttondemo.component';

export const splitbuttonDemoRoute: Route = {
    path: 'splitbutton',
    component: SplitbuttonDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'dashboard.buttons.splitbutton.title'
    },
    canActivate: [UserRouteAccessService]
};
