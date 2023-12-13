import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PermitDialogComponent } from '../permit-dialog/permit-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { Preorder } from 'src/app/models/preorder';
import * as moment from 'moment';

const SALES_DATA: any[] = [
  {
    no: 1,
    date: "2023-01-01",
    customerName: "John Doe",
    preorderNo: "PO12345",
    region: "North",
    totalQty: 100,
    totalAmount: 1500.00,
    status: "Pending",
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
    status: "Accepted",
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
    status: "Accepted",
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
  preorders: Preorder[] = [];
  displayedColumns: string[] = ['no', 'date', 'customer_name', 'preorder_number', 'customer_region', 'total_quantity', 'total_price', 'status', 'permit_status'];

  // dataSource = new MatTableDataSource(SALES_DATA);
  dataSource = new MatTableDataSource(this.preorders);

  constructor(
    private api: ApiService,
    public dialog: MatDialog,

  ) { }

  async ngOnInit() {
    // this.loadData();
    // console.log(SALES_DATA);
    this.preorders = await this.api.getAllPreorders();
    console.log(this.preorders);

    this.preorders.forEach(order => {
      order.created_at = new Date(order.created_at);
      order.date = moment.utc(order.created_at).format('MM/DD/YYYY');
    });
    this.dataSource = new MatTableDataSource(this.preorders);
  }

  getRowData(row: Preorder, evt: any): void {
    console.log(row, evt);
  }

  // loadData() {
  //   this.apiservice.getSalesData().subscribe(
  //     (result) => {
  //       this.mySalesData = result;
  //     },
  //     error => console.error("Error fetching sales data", error)
  //   )
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  openPermitDialog() {
    this.dialog.open(PermitDialogComponent);
  }

  openStatusDialog(preorder: Preorder) {
    this.dialog.open(StatusDialogComponent, { data: preorder })
  }
}
