import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
];
