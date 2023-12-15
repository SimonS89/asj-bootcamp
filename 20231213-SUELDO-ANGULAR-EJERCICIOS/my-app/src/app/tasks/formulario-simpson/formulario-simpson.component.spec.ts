import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSimpsonComponent } from './formulario-simpson.component';

describe('FormularioSimpsonComponent', () => {
  let component: FormularioSimpsonComponent;
  let fixture: ComponentFixture<FormularioSimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioSimpsonComponent]
    });
    fixture = TestBed.createComponent(FormularioSimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
