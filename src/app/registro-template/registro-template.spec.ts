import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTemplate } from './registro-template';

describe('RegistroTemplate', () => {
  let component: RegistroTemplate;
  let fixture: ComponentFixture<RegistroTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
