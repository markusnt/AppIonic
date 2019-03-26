import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mesasPage } from './mesas.page';

describe('mesasPage', () => {
  let component: mesasPage;
  let fixture: ComponentFixture<mesasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [mesasPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
