/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnalysisComponent } from './analysis.component';
import { ClientService } from '../app-common/services/client.service';
import { TableClientComponent } from '../client/table-client/table-client.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { CollapseModule } from 'ngx-bootstrap';

describe('AnalysisComponent', () => {
  let component: AnalysisComponent;
  let fixture: ComponentFixture<AnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisComponent, TableClientComponent],
      imports: [AppCommonModule],
      providers: [ClientService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
