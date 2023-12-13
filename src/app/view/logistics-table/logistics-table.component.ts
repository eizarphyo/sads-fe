import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PermitDialogComponent } from '../permit-dialog/permit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-logistics-table',
  templateUrl: './logistics-table.component.html',
  styleUrls: ['./logistics-table.component.css']
})
export class LogisticsTableComponent {
  constructor(
    public dialog: MatDialog,
  ) { }

  displayedColumns: string[] = ['select', 'no', 'date', 'customerName', 'preorderNo', 'region', 'totalQty', 'address', 'status'];
  trucks: any[] = [
    {
      id: 1,
      truck_no: "C3-2349",
      capacity: 200,
      driver: "Kyaw Kyaw"
    },
    {
      id: 2,
      truck_no: "A3-4534",
      capacity: 260,
      driver: "Kyaw Kyaw"
    },
    {
      id: 3,
      truck_no: "L3-4532",
      capacity: 50,
      driver: "Kyaw Kyaw"
    },
    {
      id: 4,
      truck_no: "J3-3242",
      capacity: 100,
      driver: "Kyaw Kyaw"
    },
    {
      id: 5,
      truck_no: "K2-4534",
      capacity: 300,
      driver: "Kyaw Kyaw"
    }
  ]
  dataSource = new MatTableDataSource(SALES_DATA);
  selection = new SelectionModel<any[]>(true, []);
  selectedData: any[] = [];
  totalBoxes = 0;
  showTrackAssignBox = false;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  openPermitDialog() {
    this.dialog.open(PermitDialogComponent);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows(event: any) {
    if (event.checked) {
      SALES_DATA.forEach((data) => {
        this.selectedData.push(data);
        this.selection.select(...this.dataSource.data);
      });
    } else {
      this.selectedData = [];
      this.selection.clear();
    }
    this.updateQty();
    // if (this.isAllSelected()) {
    //   this.selection.clear();
    //   return;
    // }
    // this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  updateQty() {
    let total = 0
    this.selection.selected.forEach((data: any) => {
      total += data.totalQty;
    });
    this.totalBoxes = total;

  }

  toggleTrackAssignBox() {
    this.showTrackAssignBox = !this.showTrackAssignBox;
  }
}

const SALES_DATA: any[] = [
  {
    no: 1,
    date: "2023-01-01",
    customerName: "John Doe",
    preorderNo: "PO12345",
    region: "North",
    totalQty: 100,
    address: "Bandula Street",
    status: "Shipped",
  },
  {
    no: 2,
    date: "2023-02-05",
    customerName: "Jane Smith",
    preorderNo: "PO67890",
    region: "South",
    totalQty: 75,
    address: "Bandula Street",
    status: "Processing",
  },
  {
    no: 3,
    date: "2023-03-10",
    customerName: "Bob Johnson",
    preorderNo: "PO54321",
    region: "West",
    totalQty: 120,
    address: "Lanmadaw Street",
    status: "Delivered",
  }
];
