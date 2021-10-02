import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScoreComponent } from './view-score.component';

describe('ViewScoreComponent', () => {
  let component: ViewScoreComponent;
  let fixture: ComponentFixture<ViewScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
