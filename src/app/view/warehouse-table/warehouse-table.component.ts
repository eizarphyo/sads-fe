import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

const LOGISTIC_DATA: any[] = [
  {
    no: 1,
    date: "2023-01-01",
    preorderNo: "PO12345",
    item: "Tea",
    totalQty: 100,
    box: 200,
    status: "Pending",
  },
  {
    no: 2,
    date: "2023-02-05",
    preorderNo: "PO67890",
    item: "Juice",
    totalQty: 75,
    box: 500,
    status: "Accepted"
  },
  {
    no: 3,
    date: "2023-03-10",
    preorderNo: "PO54321",
    item: "Liquor",
    totalQty: 120,
    box: 3,
    status: "Accepted",
  }
];
@Component({
  selector: 'app-warehouse-table',
  templateUrl: './warehouse-table.component.html',
  styleUrls: ['./warehouse-table.component.css']
})
export class WarehouseTableComponent {
  myLogisticData: any = [];
  displayedColumns: string[] = ['no', 'date', 'preorderNo', 'item', 'totalQty', 'box', 'status'];

  dataSource = new MatTableDataSource(LOGISTIC_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
