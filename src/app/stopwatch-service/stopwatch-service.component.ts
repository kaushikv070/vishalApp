import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject, NEVER, interval, Subscription } from 'rxjs';
import { startWith, scan, tap, switchMap } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-stopwatch-service',
  templateUrl: './stopwatch-service.component.html',
  styleUrls: ['./stopwatch-service.component.css']
})
export class StopwatchServiceComponent implements OnInit {

  constructor() { }
  
  todaysDataTime = '';
  timeArray=[];
  isStarted=false;
  globalstarted=false;
  subscription: Subscription;
  startedCount:number;
  pausedCount:number;
  ngOnInit(): void {
    //this.inputCount.nativeElement.value=0;
    //this.initializeCounter();
    this.startedCount=0;
    this.pausedCount=0;
  }
  @ViewChild('counter', {read:ElementRef,static:true})
  counter:ElementRef;
  @ViewChild('counterInput', {read:ElementRef,static:true})
  counterInput:ElementRef;

  @ViewChild('inputCount', {static: true}) inputCount: ElementRef;
 

  private counterSubject: Subject<{pause?:boolean,counterValue?:any}>= new Subject();


  private initializeCounter(num:any,flag:boolean){

    this.subscription= this.counterSubject.pipe(
      startWith({pause:flag,counterValue:num}),
      scan((acc,val)=> ({...acc, ...val})),
      tap((state)=> {
        this.counter.nativeElement.innerText=state.counterValue;
      }),
      //swich map with end the old subscription
      switchMap((state)=>state.pause?NEVER:interval(1000).pipe(

        tap(val=>{
          state.counterValue=state.counterValue-1;
          this.counter.nativeElement.innerText=state.counterValue;
          if(state.counterValue<=0){
            this.counterSubject.next({pause:true});

          }
        })
      ))



    ).subscribe();
  }
   startCounter(){

    // if(this.inputCount.nativeElement.value=='' || this.inputCount.nativeElement.value>0){
    //   alert("please enter timer value greater than 0 ");
    //   return;
    // }
    if(!this.globalstarted){

      this.counter.nativeElement.innerText=this.inputCount.nativeElement.value;
    }
     if(!this.isStarted ){

       this.initializeCounter(this.counter.nativeElement.innerText,false);
       //this.counterSubject.next({pause:false});
     }
     this.startedCount=this.startedCount+1;
    const date: Date = new Date();
    this.todaysDataTime = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.timeArray.push({action:'started at',
    time:this.todaysDataTime,startedValue:this.counter.nativeElement.innerText});
    console.log("in start")
    this.counterSubject.next({pause:false});
    this.isStarted=true;
    this.globalstarted=true;
  }
   pauseCounter(){
    // if(this.inputCount.nativeElement.value=='' || this.inputCount.nativeElement.value>0){
    //   alert("please start the timer ");
    //   return;
    // }
    this.pausedCount=this.pausedCount+1;
    const date: Date = new Date();
    this.todaysDataTime = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.timeArray.push({action:'paused at',time:this.todaysDataTime,pausedValue:this.counter.nativeElement.innerText});
    
    this.counterSubject.next({pause:true});
    this.isStarted=false;
  }

   resetCounter(){
    //this.counterSubject.next({pause:true});
    this.counter.nativeElement.innerText=0;
    this.subscription.unsubscribe();
    window.location.reload();
}
}
