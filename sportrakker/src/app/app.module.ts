import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewMeetComponent } from './new-meet/new-meet.component';
import { NewOrganizationComponent } from './new-organization/new-organization.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewMeetComponent,
    NewOrganizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
