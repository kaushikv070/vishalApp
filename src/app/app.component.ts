import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'home';
  count:Observable<number>;
  routes=[

   
    {linkName:'banner',url:'banner'},
    {linkName:'ecom',url:'ecom'},
    {linkName:'watchDecorator',url:'watchDecorator'},
    {linkName:'watchService',url:'watchService'},
    {linkName:'dynamicDiv',url:'dynamicDiv'},
    {linkName:'student',url:'student'}
  ]

  ngOnInit(): void {

    
   
  }


  
}
