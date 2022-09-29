import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesEjmpComponent } from './pipes-ejmp.component';

describe('PipesEjmpComponent', () => {
  let component: PipesEjmpComponent;
  let fixture: ComponentFixture<PipesEjmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesEjmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesEjmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
