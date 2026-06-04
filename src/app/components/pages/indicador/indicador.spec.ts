import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indicador } from './indicador';

describe('Indicador', () => {
  let component: Indicador;
  let fixture: ComponentFixture<Indicador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(Indicador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
