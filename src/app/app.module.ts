import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
  { path: 'users', component: UsersComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserFormComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
