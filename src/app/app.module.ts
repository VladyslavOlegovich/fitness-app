import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { ProfileComponent } from './sidebar/profile/profile.component';
// import { WorkoutListComponent } from './sidebar/workout-list/workout-list.component';
// import { SettingsComponent } from './sidebar/settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ProfileComponent,
    // WorkoutListComponent,
    // SettingsComponent,
    SidebarComponent,
    routingComponents,
    MainContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
