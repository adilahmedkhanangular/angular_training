import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
