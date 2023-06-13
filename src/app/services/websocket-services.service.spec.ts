import { TestBed } from '@angular/core/testing';

import { WebsocketServicesService } from './websocket-services.service';

describe('WebsocketServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsocketServicesService = TestBed.get(WebsocketServicesService);
    expect(service).toBeTruthy();
  });
});
