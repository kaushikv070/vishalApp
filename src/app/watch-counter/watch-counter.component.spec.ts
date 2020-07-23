import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCounterComponent } from './watch-counter.component';

describe('WatchCounterComponent', () => {
  let component: WatchCounterComponent;
  let fixture: ComponentFixture<WatchCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
