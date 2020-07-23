import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchDecoratorComponent } from './stopwatch-decorator.component';

describe('StopwatchDecoratorComponent', () => {
  let component: StopwatchDecoratorComponent;
  let fixture: ComponentFixture<StopwatchDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
