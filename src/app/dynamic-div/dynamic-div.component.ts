import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {

  constructor() { }

  dataSource = [];  
  ngOnInit(): void {
    
    this.dataSource.push(0,1);
   
  }

  @HostListener('window:scroll', ['$event'])
onScroll(event) {

 if(event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight )   {
  this.dataSource.push(this.dataSource.length);
  
 }
 
}

 showAlert(index){
   alert("Div "+index+" clicked");
 }

}
