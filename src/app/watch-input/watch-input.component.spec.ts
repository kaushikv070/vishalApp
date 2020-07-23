import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchInputComponent } from './watch-input.component';

describe('WatchInputComponent', () => {
  let component: WatchInputComponent;
  let fixture: ComponentFixture<WatchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
