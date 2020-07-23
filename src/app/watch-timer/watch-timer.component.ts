import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watch-timer',
  templateUrl: './watch-timer.component.html',
  styleUrls: ['./watch-timer.component.css']
})
export class WatchTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() startClick;
  @Input() pausedClick;

}
