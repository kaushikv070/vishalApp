import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watch-logging',
  templateUrl: './watch-logging.component.html',
  styleUrls: ['./watch-logging.component.css']
})
export class WatchLoggingComponent implements OnInit {

  @Input('timeArray') timeArray;
  times:any;
  constructor() {
    
   }

  ngOnInit(): void {
    // this.times=this.timeArray;
    // console.log("inlogg>>"+this.times)
  }

}
