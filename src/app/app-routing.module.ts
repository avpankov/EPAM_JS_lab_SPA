import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkPageComponent } from './cdk-page/cdk-page/cdk-page.component';
import { HomeComponent } from './home-page/home.component';
import { MatPageComponent } from './material-page/mat-page/mat-page.component';
import { UsersComponent } from './users-page/users/users.component';
import { UserPageComponent } from './users-page/user-page/user-page.component';
import { WeatherComponent } from './weather-page/weather/weather.component';

const routes: Routes = [
  { path: 'users/:id/:name/:surname', component: UserPageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', component: HomeComponent },
  { path: 'cdk', component: CdkPageComponent },
  { path: 'material', component: MatPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
