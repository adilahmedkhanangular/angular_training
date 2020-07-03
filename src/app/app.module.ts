import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    StudentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
