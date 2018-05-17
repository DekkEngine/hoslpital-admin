import { NgModule } from '@angular/core';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { FormsModule } from "@angular/forms";

// ng2-charts
import { ChartsModule } from 'ng2-charts';

//Modules
import { SharedModule } from '../shared/shared.module';

//Routes
import { PAGE_ROUTE } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AcountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports : [
        SharedModule,
        PAGE_ROUTE,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {}