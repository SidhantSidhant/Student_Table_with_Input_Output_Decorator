import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './page/student-detail/student-detail.component';
import { StudentListComponent } from './page/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveDubplicateComponent } from './page/remove-dubplicate/remove-dubplicate.component';
import { ParentComponent } from './page/Route/parent/parent.component';
import { ChildComponent } from './page/Route/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    RemoveDubplicateComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
