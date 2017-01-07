import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewMeetComponent } from './new-meet/new-meet.component';
import { NewOrganizationComponent } from './new-organization/new-organization.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{ path: 'newOrganization', component: NewOrganizationComponent },
	{ path: 'newMeet', component: NewMeetComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewMeetComponent,
    NewOrganizationComponent,
	HomeComponent,
	PageNotFoundComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
