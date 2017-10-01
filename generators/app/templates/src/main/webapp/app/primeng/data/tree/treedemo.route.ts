import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { TreeDemoComponent } from './treedemo.component';

export const treeDemoRoute: Route = {
    path: 'tree',
    component: TreeDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.tree.title'
    },
    canActivate: [UserRouteAccessService]
};
