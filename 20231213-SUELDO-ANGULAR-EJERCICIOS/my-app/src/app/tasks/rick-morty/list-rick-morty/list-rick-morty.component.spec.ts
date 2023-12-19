import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRickMortyComponent } from './list-rick-morty.component';

describe('ListRickMortyComponent', () => {
  let component: ListRickMortyComponent;
  let fixture: ComponentFixture<ListRickMortyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRickMortyComponent]
    });
    fixture = TestBed.createComponent(ListRickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
