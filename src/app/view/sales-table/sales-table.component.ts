import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';


const SALES_DATA: any[] = [
  {
    no: 1,
    date: "2023-01-01",
    customerName: "John Doe",
    preorderNo: "PO12345",
    region: "North",
    totalQty: 100,
    totalAmount: 1500.00,
    status: "Shipped",
    transportPermit: "Pending"
  },
  {
    no: 2,
    date: "2023-02-05",
    customerName: "Jane Smith",
    preorderNo: "PO67890",
    region: "South",
    totalQty: 75,
    totalAmount: 1200.50,
    status: "Processing",
    transportPermit: "Accepted"
  },
  {
    no: 3,
    date: "2023-03-10",
    customerName: "Bob Johnson",
    preorderNo: "PO54321",
    region: "West",
    totalQty: 120,
    totalAmount: 2000.75,
    status: "Delivered",
    transportPermit: "Requested"
  }
];
@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {

  mySalesData: any = [];
  displayedColumns: string[] = ['no', 'date', 'customerName', 'preorderNo', 'region', 'totalQty', 'totalAmount', 'status', 'transportPermit'];

  dataSource = SALES_DATA;


  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    // this.loadData();
    console.log(SALES_DATA);
    console.log(this.dataSource)
  }

  loadData() {
    this.apiservice.getSalesData().subscribe(
      (result) => {
        this.mySalesData = result;
      },
      error => console.error("Error fetching sales data", error)
    )
  }
}
