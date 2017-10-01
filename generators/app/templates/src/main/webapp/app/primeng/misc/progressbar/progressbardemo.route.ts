import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { ProgressBarDemoComponent } from './progressbardemo.component';

export const progressbarDemoRoute: Route = {
    path: 'progressbar',
    component: ProgressBarDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.progressbar.title'
    },
    canActivate: [UserRouteAccessService]
};
