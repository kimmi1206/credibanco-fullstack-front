import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargarTarjetaComponent } from './recargar-tarjeta.component';

describe('RecargarTarjetaComponent', () => {
  let component: RecargarTarjetaComponent;
  let fixture: ComponentFixture<RecargarTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecargarTarjetaComponent]
    });
    fixture = TestBed.createComponent(RecargarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
