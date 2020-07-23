import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch-decorator',
  templateUrl: './stopwatch-decorator.component.html',
  styleUrls: ['./stopwatch-decorator.component.css']
})
export class StopwatchDecoratorComponent implements OnInit {

  counterValue: Number;
  started:boolean;
  paused:boolean
  timeArray:Array<any>;
  count:number;
  action:String;
  startClick:number;
  pausedClick:number;
  reset:boolean;

  constructor() { }

  ngOnInit(): void {
  }
  display(result){
    this.counterValue=result.count;

    this.started=result.started;
    this.paused=result.paused;
    this.timeArray=result.timeArray;
    this.startClick=result.startClick;
    this.pausedClick=result.pausedClick;
    this.reset=result.reset;
    console.log(result);
  }
  emitCount(result){
    this.count=result.count;
    this.action=result.action;
  }
 
}
