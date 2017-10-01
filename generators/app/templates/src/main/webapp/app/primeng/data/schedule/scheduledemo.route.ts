import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
import { ScheduleDemoComponent } from './scheduledemo.component';

export const scheduleDemoRoute: Route = {
    path: 'schedule',
    component: ScheduleDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.schedule.title'
    },
    canActivate: [UserRouteAccessService]
};
