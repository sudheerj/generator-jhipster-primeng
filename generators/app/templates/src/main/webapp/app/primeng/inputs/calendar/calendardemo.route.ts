import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { CalendarDemoComponent } from './calendardemo.component';

export const calendarDemoRoute: Route = {
    path: 'calendar',
    component: CalendarDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.calendar.title'
    },
    canActivate: [UserRouteAccessService]
};
