import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTimerComponent } from './watch-timer.component';

describe('WatchTimerComponent', () => {
  let component: WatchTimerComponent;
  let fixture: ComponentFixture<WatchTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
