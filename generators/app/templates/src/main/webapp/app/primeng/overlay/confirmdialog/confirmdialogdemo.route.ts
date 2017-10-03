import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { ConfirmDialogDemoComponent } from './confirmdialogdemo.component';

export const confirmDialogDemoRoute: Route = {
    path: 'confirmdialog',
    component: ConfirmDialogDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.overlay.confirmdialog.title'
    },
    canActivate: [UserRouteAccessService]
};
