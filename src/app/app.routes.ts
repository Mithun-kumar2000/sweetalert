import { Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';

export const routes: Routes = [
    {path:"",redirectTo:"alert",pathMatch:"full"},
    {path:"alert",component:AlertComponent}
];
