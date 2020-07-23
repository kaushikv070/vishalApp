import { Component, OnInit, OnDestroy } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('1500ms ease-in'))
  ])
]
})
export class BannerComponent implements OnInit, OnDestroy  {

  subscription: Subscription;
  state: string = 'default';
  constructor() { }

  ngOnInit(): void {

    const source = interval(3000);
  
  this.subscription = source.subscribe(val => this.rotate());


  }

  
  rotate(){
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }


 
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 



  

  
}
