import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { GmapDemoComponent } from './gmapdemo.component';

export const gmapDemoRoute: Route = {
    path: 'gmap',
    component: GmapDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.gmap.title'
    },
    canActivate: [UserRouteAccessService]
};
