import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { FileUploadDemoComponent } from './fileuploaddemo.component';

export const fileuploadDemoRoute: Route = {
    path: 'fileupload',
    component: FileUploadDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.fileupload.fileupload.title'
    },
    canActivate: [UserRouteAccessService]
};
