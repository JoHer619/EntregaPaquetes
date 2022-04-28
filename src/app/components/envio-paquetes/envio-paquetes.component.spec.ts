import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPaquetesComponent } from './envio-paquetes.component';

describe('EnvioPaquetesComponent', () => {
  let component: EnvioPaquetesComponent;
  let fixture: ComponentFixture<EnvioPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioPaquetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
