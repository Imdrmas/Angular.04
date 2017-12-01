import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MatMenuModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { MyFormComponent } from './my-form/my-form.component';

import { MatCardModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { MatIconModule } from '@angular/material';

import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    LoginComponent,
    AboutComponent,
    MyFormComponent,
    HomeComponent,
    ProfileComponent,

  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCardModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule,
    RouterModule.forRoot([

      {
        path: 'login',
        component:  LoginComponent
      },
      {
        path: 'about',
        component:  AboutComponent
      },
      {
        path: 'myform',
        component:  MyFormComponent
      },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'profile',
      canActivate: [AuthguardGuard],
      component: ProfileComponent 
    },
    {
      path: 'mynewcomponent',
      component: MyNewComponentComponent
    }
    ])
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
  color = 'primary';
  mode = 'determinate';
  value = 50;


 }
