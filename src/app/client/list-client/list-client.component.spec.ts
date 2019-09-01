/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListClientComponent } from './list-client.component';
import { TableClientComponent } from '../table-client/table-client.component';
import { AppCommonModule } from '../../app-common/app-common.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ListClientComponent', () => {
  let component: ListClientComponent;
  let fixture: ComponentFixture<ListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListClientComponent, TableClientComponent],
      imports: [AppCommonModule, ReactiveFormsModule,
        CommonModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
