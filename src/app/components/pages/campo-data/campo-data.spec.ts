import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoData } from './campo-data';

describe('CampoData', () => {
  let component: CampoData;
  let fixture: ComponentFixture<CampoData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoData],
    }).compileComponents();

    fixture = TestBed.createComponent(CampoData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
