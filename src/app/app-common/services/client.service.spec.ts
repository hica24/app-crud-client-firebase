/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientService } from './client.service';
import { AppCommonModule } from '../app-common.module';
import { Client } from '../interfaces/client.interface';

describe('Service: Client', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientService],
      imports: [AppCommonModule],
    });
    let spy: jasmine.Spy;
  });

  it('should create service', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));

});
