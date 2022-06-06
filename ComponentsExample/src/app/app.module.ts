import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { MyButtonComponent } from './components/my-button/my-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherCardComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
