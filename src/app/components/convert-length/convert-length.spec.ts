import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertLength } from './convert-length';

describe('ConvertLength', () => {
  let component: ConvertLength;
  let fixture: ComponentFixture<ConvertLength>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertLength],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertLength);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
