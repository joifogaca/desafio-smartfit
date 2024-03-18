import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from '../card/card.component';
import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent, CardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
