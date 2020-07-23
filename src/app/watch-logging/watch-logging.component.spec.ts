import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLoggingComponent } from './watch-logging.component';

describe('WatchLoggingComponent', () => {
  let component: WatchLoggingComponent;
  let fixture: ComponentFixture<WatchLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
