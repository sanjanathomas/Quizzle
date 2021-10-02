import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePuzzleComponent } from './create-puzzle.component';

describe('CreatePuzzleComponent', () => {
  let component: CreatePuzzleComponent;
  let fixture: ComponentFixture<CreatePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
