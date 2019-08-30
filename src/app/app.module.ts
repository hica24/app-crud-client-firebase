import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppCommonModule } from './app-common/app-common.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClientComponent } from './client/new-client/new-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ClientComponent } from './client/client.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AppCommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,

  ],
  declarations: [
    AppComponent,
    ClientComponent,
    ListClientComponent,
    NewClientComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
