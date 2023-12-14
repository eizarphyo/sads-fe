import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


const ADMIN_DATA: any[] = [
  {
    no: 1,
    date: "2023-01-01",
    customerName: "John Doe",
    preorderNo: "PO12345",
    region: "North",
    totalQty: 100,
    totalAmount: 500
  },
  {
    no: 2,
    date: "2023-02-05",
    customerName: "Rosey",
    preorderNo: "PO67890",
    region: "South",
    totalQty: 75,
    totalAmount: 500
  },
  {
    no: 3,
    date: "2023-03-10",
    customerName: "David",
    preorderNo: "PO54321",
    region: "West",
    totalQty: 120,
    totalAmount: 230
  }
];
@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent {
  myAdminData: any = [];
  displayedColumns: string[] = ['no', 'date', 'customerName', 'preorderNo', 'region', 'totalQty', 'totalAmount']

  dataSource = new MatTableDataSource(ADMIN_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  getTotalAmount() {
    return this.myAdminData.map((t: any) => t.totalAmount).reduce((acc: any, value: any) => acc + value, 0);
  }
  getTotalQty() { return this.myAdminData.map((t: any) => t.totalQty).reduce((acc: any, value: any) => acc + value, 0); }

}