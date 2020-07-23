import { Component, OnInit, Input } from '@angular/core';
import { EcommerceService } from './ecoomerce.service';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

    mode:String;
    products=[];
    public options: any[] = [
      {id:1,name:'low to high'},
      {id:2,name:'high to low'}
    ];
    selectedPrice: number;

  constructor(private ecomservice: EcommerceService, private spinner: NgxSpinnerService) {
   // console.log(item);
   }

  ngOnInit() {
    this.mode='list'
    this.selectedPrice=20;
    this.spinner.show();
    this.ecomservice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
      this.spinner.hide();
    })
  }
  flip(event,item){
   
    this.mode=item;
  }
  selectChangeHandler (event: any) {
    //update the ui
    console.log(event);
    this.selectedPrice = event.target.value;
    console.log(this.selectedPrice);
  }
}
