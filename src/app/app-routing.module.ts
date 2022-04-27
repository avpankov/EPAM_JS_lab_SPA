import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { UsersComponent } from './users-page/users/users.component';
import { WeatherComponent } from './weather-page/weather/weather.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
