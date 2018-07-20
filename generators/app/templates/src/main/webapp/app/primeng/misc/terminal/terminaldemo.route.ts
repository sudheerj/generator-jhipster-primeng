import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { TerminalDemoComponent } from './terminaldemo.component';

export const terminalDemoRoute: Route = {
    path: 'terminal',
    component: TerminalDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.terminal.title'
    },
    canActivate: [UserRouteAccessService]
};
