import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-watch-counter',
  templateUrl: './watch-counter.component.html',
  styleUrls: ['./watch-counter.component.css']
})
export class WatchCounterComponent implements OnInit,OnChanges {

 // @Input('counterValue') counterValue: any;
  x:any;
  remainValue:number;
  @Output () counterTracker = new EventEmitter();
 
 constructor() { 
   console.log("in construct");
 }

 ngOnInit(): void {
  //  alert("incounter");
  
  this.counter1.nativeElement.innerText=0;
  //this.timer(10);
 

  
  
  }
 @ViewChild('counter1',{read:ElementRef,static:true}) counter1: ElementRef;
 @Input()
 set reset(val:boolean){
  if(val){
    clearInterval(this.x);
    this.counter1.nativeElement.innerText=0;
  }
 }

 @Input()
 set started(val:boolean){
  //alert("in inputarea=="+this.remainValue+val);
  if(val){
    this.counterTracker.emit({count:this.remainValue,action:'started'});
    this.timer(this.remainValue);
  }

  
 }
@Input()
 set paused(val:boolean){
  
  if(val){
    this.remainValue=this.counter1.nativeElement.innerText;
    //alert("paused-at"+this.remainValue);
    this.counterTracker.emit({count:this.remainValue,action:'paused'});
    clearInterval(this.x);
  }
 }


  @Input('counterValue') 
  set counterValue(val:number){

this.remainValue=val;
  }
get counterValue(){

  console.log("in gettter"+this.counter1.nativeElement.value);
  return this.counter1.nativeElement.value;
}
    
     timer(ct:number){
      this.counter1.nativeElement.innerText=ct;
      this.x = setInterval(()=> {
    
        if(ct &&  ct>0){
        ct = ct-1;
       
          console.log("numner=="+ ct);
          this.counter1.nativeElement.innerText=ct;
          if ( ct <= 0) {
              clearInterval(this.x);
             console.log("EXPIRED");
          }
        }
      }, 1000);
     }
   

    
    ngOnChanges(){
      console.log("onchange");
      // if(this.counterValue!==undefined && this.counterValue!=0){
      //   this.timer(this.counterValue);
      // }
      
    }
  
     
  

 

}
