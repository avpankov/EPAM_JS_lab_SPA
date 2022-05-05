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
import { StepperComponent } from './cdk-page/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkPageComponent } from './cdk-page/cdk-page/cdk-page.component';
import { AccordionComponent } from './cdk-page/accordion/accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { TableComponent } from './cdk-page/table/table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { DragAndDropComponent } from './cdk-page/drag-and-drop/drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { VirtualScrollComponent } from './cdk-page/virtual-scroll/virtual-scroll.component';
import {ScrollingModule} from '@angular/cdk/scrolling';


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
    StepperComponent,
    CdkPageComponent,
    AccordionComponent,
    TableComponent,
    DragAndDropComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkStepperModule,
    CdkAccordionModule,
    CdkTableModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
