import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BreadrumbsComponent } from './breadrumbs/breadrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations : [
        HeaderComponent,
        BreadrumbsComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    exports : [
        HeaderComponent,
        BreadrumbsComponent,
        SidebarComponent,
        NopagefoundComponent
    ]
})
export class SharedModule { }