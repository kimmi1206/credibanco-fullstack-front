import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarTarjetasComponent } from './administrar-tarjetas.component';

describe('AdministrarTarjetasComponent', () => {
  let component: AdministrarTarjetasComponent;
  let fixture: ComponentFixture<AdministrarTarjetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrarTarjetasComponent],
    });
    fixture = TestBed.createComponent(AdministrarTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
