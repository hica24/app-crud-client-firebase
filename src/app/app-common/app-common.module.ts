import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonComponent } from './app-common.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppCommonComponent,
    AppNavbarComponent,
    AppFooterComponent
  ],
  exports:[
    AppNavbarComponent,
    AppFooterComponent
  ]
})
export class AppCommonModule { }
