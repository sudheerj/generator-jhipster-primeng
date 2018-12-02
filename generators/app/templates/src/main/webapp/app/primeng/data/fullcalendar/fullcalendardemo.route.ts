import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { FullCalendarDemoComponent } from './fullcalendardemo.component';

export const fullcalendarDemoRoute: Route = {
    path: 'fullcalendar',
    component: FullCalendarDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.data.fullcalendar.title'
    },
    canActivate: [UserRouteAccessService]
};
