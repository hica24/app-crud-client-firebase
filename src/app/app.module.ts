import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppCommonModule } from './app-common/app-common.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClientComponent } from './client/new-client/new-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ClientComponent } from './client/client.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { TableClientComponent } from './client/table-client/table-client.component';
import { CollapseModule, BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      AppCommonModule,
      CollapseModule.forRoot(),
      BsDatepickerModule.forRoot(),
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      CommonModule,
   ],
   declarations: [
      AppComponent,
      ClientComponent,
      ListClientComponent,
      NewClientComponent,
      TableClientComponent,
      AnalysisComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
