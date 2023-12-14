import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const FACTORY_DATA: any[] = [
  {
    no: 1,
    date: "2023-01-01",
    item: "Tea",
    totalQty: 100,
    box: 200
  },
  {
    no: 2,
    date: "2023-02-05",
    item: "Juice",
    totalQty: 75,
    box: 500,
  },
  {
    no: 3,
    date: "2023-03-10",
    item: "Liquor",
    totalQty: 120,
    box: 3
  }
];
@Component({
  selector: 'app-factory-table',
  templateUrl: './factory-table.component.html',
  styleUrls: ['./factory-table.component.css']
})
export class FactoryTableComponent {
  myLogisticData: any = [];
  displayedColumns: string[] = ['no', 'date', 'item', 'totalQty', 'box'];

  dataSource = new MatTableDataSource(FACTORY_DATA);

  getTotalRawMaterials() {
    return FACTORY_DATA.map((data: any) => data.totalQty).reduce((a: any, b: any) => a + b, 0);
  }
}
