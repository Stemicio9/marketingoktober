import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrazioneComponent} from "./pages/registrazione/registrazione.component";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'registrazione',
    component: RegistrazioneComponent
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
