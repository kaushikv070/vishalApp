import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-watch-input',
  templateUrl: './watch-input.component.html',
  styleUrls: ['./watch-input.component.css']
})
export class WatchInputComponent implements OnInit {

  @ViewChild('counterInput', {static: true}) counterInput: ElementRef;
  @Output () countEvent = new EventEmitter();
  @Input() count;
  @Input() action;
  @Input() 
  set reset(val:number){
    if(val){
      this.count=0;
    }
  }

  
  startClick;
  pausedClick;
  todaysDataTime = '';
  checked: Boolean=true;
  timeArray=[];
  constructor() { }

  ngOnInit(): void {
    this.startClick=0;
    this.pausedClick=0;
  }
  trackCounterLimit(){
    // alert("in input>>"+this.counterInput.nativeElement.value);
    this.startClick=this.startClick+1;
    const date: Date = new Date();
    this.todaysDataTime = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    
      this.timeArray.push({time:this.todaysDataTime,action:'Started'});
    
    this.countEvent.emit({count:this.counterInput.nativeElement.value,timeArray:this.timeArray,
      started:true,startClick:this.startClick,pausedClick:this.pausedClick});
   
  }
  pause(){
    
    this.pausedClick=this.pausedClick+1;
    const date: Date = new Date();
    this.todaysDataTime = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.timeArray.push({'time':this.todaysDataTime,'action':'Paused'});
    this.countEvent.emit({count:this.counterInput.nativeElement.value,
      timeArray:this.timeArray,paused:true, pausedClick:this.pausedClick,startClick:this.startClick});
  }
  clear(){
    this.counterInput.nativeElement.value='';
    this.timeArray=[];
    this.startClick=0;
    this.pausedClick=0;
    // const date: Date = new Date();
    // this.todaysDataTime = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.countEvent.emit({count:this.counterInput.nativeElement.value,
      timeArray:this.timeArray,pausedClick:this.pausedClick,
      startClick:this.startClick,reset:true});
  }

}
