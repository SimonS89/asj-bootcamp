import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRickMortyComponent } from './detail-rick-morty.component';

describe('DetailRickMortyComponent', () => {
  let component: DetailRickMortyComponent;
  let fixture: ComponentFixture<DetailRickMortyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRickMortyComponent]
    });
    fixture = TestBed.createComponent(DetailRickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
