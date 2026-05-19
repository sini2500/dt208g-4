import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertTemp } from './convert-temp';

describe('ConvertTemp', () => {
  let component: ConvertTemp;
  let fixture: ComponentFixture<ConvertTemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertTemp],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertTemp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
