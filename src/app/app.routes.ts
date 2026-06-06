import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.ShellHomeComponent),
  },
  {
    path: 'mf1',
    loadComponent: () => loadRemoteModule('mf1', './Component').then((m) => m.Mf1Component),
  },
  {
    path: 'mf2',
    loadComponent: () => loadRemoteModule('mf2', './Component').then((m) => m.Mf2Component),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
