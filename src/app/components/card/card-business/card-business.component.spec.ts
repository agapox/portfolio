import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBusinessComponent } from './card-business.component';

describe('CardBusinessComponent', () => {
  let component: CardBusinessComponent;
  let fixture: ComponentFixture<CardBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
