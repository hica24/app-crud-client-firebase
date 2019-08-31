import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';
import { AppFooterComponent } from './component/app-footer/app-footer.component';
import { ErrorMessagesComponent } from './component/error-messages/error-messages.component';
import { ClientService } from './services/client.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppNavbarComponent,
    AppFooterComponent,
    ErrorMessagesComponent
  ],
  providers: [
    ClientService
  ],
  exports: [
    AppNavbarComponent,
    AppFooterComponent,
    ErrorMessagesComponent
  ]
})
export class AppCommonModule { }
