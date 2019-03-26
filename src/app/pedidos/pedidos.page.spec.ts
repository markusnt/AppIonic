import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidosPage } from './pedidos.page';

describe('pedidosPage', () => {
  let component: pedidosPage;
  let fixture: ComponentFixture<pedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [pedidosPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
