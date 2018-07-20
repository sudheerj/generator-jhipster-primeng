import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { SelectButtonDemoComponent } from './selectbuttondemo.component';

export const selectbuttonDemoRoute: Route = {
    path: 'selectbutton',
    component: SelectButtonDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.selectbutton.title'
    },
    canActivate: [UserRouteAccessService]
};
