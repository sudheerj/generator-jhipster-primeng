import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../shared';
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
