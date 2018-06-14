import { Routes, RouterModule } from '@angular/router';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';

const pagesRotues : Routes = [
    {  
        path: '', 
        component: PagesComponent,
        canActivate : [ LoginGuardGuard ],
        children : [
            {  path: 'dashboard', component: DashboardComponent, data : { titulo: 'Dashboard' } },
            {  path: 'progress', component: ProgressComponent, data : { titulo : 'Progreso' } },
            {  path: 'graficas1', component: Graficas1Component, data: { titulo : 'Graficas' } },
            {  path: 'promesas', component: PromesasComponent, data : {titulo : 'Promesas'} },
            {  path: 'acount-settings', component: AcountSettingsComponent, data : { titulo : 'Ajuste de tema' } },
            {  path: 'rxjs', component: RxjsComponent, data : { titulo : 'Rxjs' } },
            {  path: '', redirectTo: '/dashboard', pathMatch:'full'}
        ]
    }
];

export const PAGE_ROUTE = RouterModule.forChild( pagesRotues );