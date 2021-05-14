import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHobbiesComponent } from './card-hobbies.component';

describe('CardHobbiesComponent', () => {
  let component: CardHobbiesComponent;
  let fixture: ComponentFixture<CardHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
