/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientComponent } from './client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { TableClientComponent } from './table-client/table-client.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { CollapseModule, BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientComponent, ListClientComponent,
                    NewClientComponent, TableClientComponent],
      imports: [AppCommonModule,CollapseModule.forRoot(),BsDatepickerModule.forRoot(),ReactiveFormsModule,
        CommonModule,BrowserAnimationsModule],
      
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
