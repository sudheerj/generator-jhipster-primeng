import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { EditorDemoComponent } from './editordemo.component';

export const editorDemoRoute: Route = {
    path: 'editor',
    component: EditorDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.inputs.editor.title'
    },
    canActivate: [UserRouteAccessService]
};
