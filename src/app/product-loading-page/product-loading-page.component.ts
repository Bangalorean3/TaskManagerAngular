import { Component, OnInit } from '@angular/core';
import {ProductLoadingPageService} from 'src/app/product-loading-page.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-loading-page',
  templateUrl: './product-loading-page.component.html',
  styleUrls: ['./product-loading-page.component.css']
})
export class ProductLoadingPageComponent implements OnInit {

  constructor(private plpservice:ProductLoadingPageService, private router:Router) { }
  allData:any
  ngOnInit() {
    this.displayPLP()
  }

  displayPLP(){
    this.plpservice.getDataMobile().subscribe((data)=>
    {
      console.log(data)
      this.allData = data
       console.log(this.allData)

    }
    )

  }
}
