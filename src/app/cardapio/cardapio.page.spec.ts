import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cardapioPage } from './cardapio.page';

describe('cardapioPage', () => {
  let component: cardapioPage;
  let fixture: ComponentFixture<cardapioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [cardapioPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cardapioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
