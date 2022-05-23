import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {CdkTableModule} from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users-page/users/users.component';
import { UserComponent } from './users-page/user/user.component';
import { AddUserFormComponent } from './users-page/add-user-form/add-user-form.component';
import { WeatherComponent } from './weather-page/weather/weather.component';
import { UsersFilterPipe } from './users-page/users/users-filter.pipe';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ClockComponent } from './clock/clock.component';
import { StepperComponent } from './cdk-page/stepper/stepper.component';
import { CdkPageComponent } from './cdk-page/cdk-page/cdk-page.component';
import { AccordionComponent } from './cdk-page/accordion/accordion.component';
import { TableComponent } from './cdk-page/table/table.component';
import { DragAndDropComponent } from './cdk-page/drag-and-drop/drag-and-drop.component';
import { VirtualScrollComponent } from './cdk-page/virtual-scroll/virtual-scroll.component';
import { MatPageComponent } from './material-page/mat-page/mat-page.component';
import { MatTableComponent } from './material-page/mat-table/mat-table.component';
import { MatStepperComponent } from './material-page/mat-stepper/mat-stepper.component';
import { MatButtonModule } from '@angular/material/button';
import { DatepickerComponent } from './material-page/datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SelectComponent } from './material-page/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { TooltipComponent } from './material-page/tooltip/tooltip.component';
import { UserPageComponent } from './users-page/user-page/user-page.component';


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
    VirtualScrollComponent,
    MatPageComponent,
    MatTableComponent,
    MatStepperComponent,
    DatepickerComponent,
    SelectComponent,
    TooltipComponent,
    UserPageComponent
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
    ScrollingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
