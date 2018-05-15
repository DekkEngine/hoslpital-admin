import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { RegisterComponent } from './login/register.component';

import { APP_ROUTE } from "./app.route";

//Modules
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
