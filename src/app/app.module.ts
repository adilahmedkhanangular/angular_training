import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {CustomDatePipe} from '../assets/custom.datepipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RightContentComponent } from './right-content/right-content.component';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { StudentComponent } from './student/student.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LeftNavComponent,
    RightContentComponent,
    ManualComponent,
    AutomaticComponent,
    StudentComponent,
    ReactiveFormComponent,
    CustomDatePipe,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule // import HttpClientModule after BrowserModule.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
