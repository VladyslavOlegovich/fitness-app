import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sidebar/home/home.component';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { SettingsComponent } from './sidebar/settings/settings.component';
import { WorkoutListComponent } from './sidebar/workout-list/workout-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'workout-list', component: WorkoutListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProfileComponent, SettingsComponent, WorkoutListComponent ]
