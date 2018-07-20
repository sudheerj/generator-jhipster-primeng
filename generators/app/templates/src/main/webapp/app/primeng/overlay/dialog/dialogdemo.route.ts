import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { DialogDemoComponent } from './dialogdemo.component';

export const dialogDemoRoute: Route = {
    path: 'dialog',
    component: DialogDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.overlay.dialog.title'
    },
    canActivate: [UserRouteAccessService]
};
