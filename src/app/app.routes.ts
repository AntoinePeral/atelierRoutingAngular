import { Routes } from '@angular/router';
import { SearchingBarComponent } from './searching-bar/searching-bar.component';
import { StudentPageComponent } from './student-page/student-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchingBarComponent,
    children : [
      {
        path: 'wcs/:studentName',
        component: StudentPageComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }

];
