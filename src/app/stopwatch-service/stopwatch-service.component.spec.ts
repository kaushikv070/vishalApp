import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchServiceComponent } from './stopwatch-service.component';

describe('StopwatchServiceComponent', () => {
  let component: StopwatchServiceComponent;
  let fixture: ComponentFixture<StopwatchServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
