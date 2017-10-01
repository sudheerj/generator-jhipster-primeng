import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { DragdropDemoComponent } from './dragdropdemo.component';

export const dragdropDemoRoute: Route = {
    path: 'dragdrop',
    component: DragdropDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.dragdrop.dragdrop.title'
    },
    canActivate: [UserRouteAccessService]
};
