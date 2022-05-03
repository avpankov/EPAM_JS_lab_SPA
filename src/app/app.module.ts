import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users-page/users/users.component';
import { UserComponent } from './users-page/user/user.component';
import { AddUserFormComponent } from './users-page/add-user-form/add-user-form.component';
import { WeatherComponent } from './weather-page/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersFilterPipe } from './users-page/users/users-filter.pipe';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ClockComponent } from './clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserFormComponent,
    WeatherComponent,
    UsersFilterPipe,
    DynamicComponent,
    ClockComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
