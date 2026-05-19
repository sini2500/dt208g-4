import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Convert } from './pages/convert/convert';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'konvertera', component: Convert },
  { path: 'om', component: About },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: "404", pathMatch: "full"}
];