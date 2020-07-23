import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class StopwatchService{
    counter: any;
    // EventEmitter should not be used this way - only for `@Output()`s
    //nameChange: EventEmitter<string> = new EventEmitter<string>();
    counterChange: Subject<number> = new Subject<number>();
    constructor() {
      this.counter = 11;
    }
  

    
    timer(val:number){
        console.log("inCountervaluesetter"+this.counter)
      if(val){
        this.counter = val;
     
        var x = setInterval(function() {
      
          
          val= val-1;
          this.counterChange.next(val);
         
            console.log("numner=="+ val);
            if ( val <= 0) {
                clearInterval(x);
               console.log("EXPIRED");
            }
        }, 1000);
      }
      }
  }