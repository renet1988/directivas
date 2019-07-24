import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracDirecComponent } from './prac-direc/prac-direc.component';
import { FirstDirective } from './first.directive';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    PracDirecComponent,
    FirstDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
