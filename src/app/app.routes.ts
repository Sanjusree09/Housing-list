import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component/home-component.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:'', component: HomeComponentComponent, title:'Home'},
    {path:'details/:id', component: DetailsComponent, title:'Home-Details'} 
    
];
