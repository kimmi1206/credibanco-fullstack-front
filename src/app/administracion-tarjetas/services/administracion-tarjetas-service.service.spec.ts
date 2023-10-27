import { TestBed } from '@angular/core/testing';

import { AdministracionTarjetasServiceService } from './administracion-tarjetas-service.service';

describe('AdministracionTarjetasServiceService', () => {
  let service: AdministracionTarjetasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministracionTarjetasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
