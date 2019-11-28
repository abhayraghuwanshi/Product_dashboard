import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IObject } from '../models/user.model'
import { UserService } from '../service/user.service';
import { DataSource } from '@angular/cdk/collections'



// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', status: "Pending", Agent: 'H', orderingDate:'25sep', deliveryDate:'26sep',orderDiscription:"nulll"},

// ];
 
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: '[Productdashboard]',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})

export class ProductDashboardComponent implements OnInit {

  public orders= []
  constructor(private _getuser: UserService){}
  ngOnInit()  {
    this._getuser.getUser()
    .subscribe(data => this.orders = data);
  }


}

// export class UserDataSource extends DataSource<any>{
  

//   constructor(private userService: UserService){
//   super();
//   }

//   connect(): Observable <User[]> {
//     return  this.userService.getUser();
//   }

//   disconnect(collectionViewer: import("@angular/cdk/collections").CollectionViewer): void {
//     throw new Error("Method not implemented.");
//   }


// import { Component, OnInit } from '@angular/core';

// export interface dashboardElement {
//  Customer-Name:" string";
//  Date-of-order: string;
//  Expected-Delivery-Date: string;
//  Status:string;
//  Agent Name:String;
//  Order Detail:string;
// }

// const ELEMENT_DATA: dashboardElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// @Component({
//   selector: 'app-product-dashboard',
//   templateUrl: './product-dashboard.component.html',
//   styleUrls: ['./product-dashboard.component.css']
// })

// export class ProductDashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

//   displayedColumns: string[] = ['Sr. No.', 'Customer-Name', 'Date-of-order', 'Expected-Delivery-Date',"Status","Agent Name","Order Detail"];
//   dataSource = ELEMENT_DATA;

// }
