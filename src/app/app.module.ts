import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Components
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { RegisterComponent } from './login/register.component';

//route
import { APP_ROUTE } from "./app.route";

//Modules
import { PagesModule } from './pages/pages.module';

//Temporal
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTE,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
