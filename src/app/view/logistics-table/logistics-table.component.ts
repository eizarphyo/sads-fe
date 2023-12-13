import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PermitDialogComponent } from '../permit-dialog/permit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from 'src/app/services/api/api.service';
import { Preorder } from 'src/app/models/preorder';
import * as moment from 'moment';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';

@Component({
  selector: 'app-logistics-table',
  templateUrl: './logistics-table.component.html',
  styleUrls: ['./logistics-table.component.css']
})
export class LogisticsTableComponent {
  constructor(
    public dialog: MatDialog,
    private api: ApiService,
  ) { }

  displayedColumns: string[] = ['select', 'no', 'date', 'customer_name', 'preorder_number', 'customer_region', 'total_quantity', 'boxes', 'address', 'status'];
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

  preorders: Preorder[] = [];

  selectedTruck: number = 0;

  startD?: Date;
  endD?: Date;

  dataSource = new MatTableDataSource(this.preorders);
  selection = new SelectionModel<any[]>(true, []);
  // selectedData: any[] = [];
  totalBoxes = 0;
  showTrackAssignBox = false;

  async ngOnInit() {
    this.preorders = await this.api.getAllPreorders();
    this.dataSource = new MatTableDataSource(this.preorders);
    this.preorders.forEach(order => {
      order.date = moment.utc(order.created_at).format('MM/DD/YYYY');
    });
    console.log(this.preorders);
  }

  openStatusDialog(preorder: Preorder) {
    this.dialog.open(StatusDialogComponent, { data: preorder });
  }

  assignTruck() {
    console.log(this.selectedTruck);
  }

  dateChanged(event: any) {
    // console.log(event);s
    // console.log(this.date);
    console.log(this.startD);
    console.log(this.endD);
    // console.log(this.endD.formatGMT('yyyyMMddHHmmss'));
  }

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
      this.preorders.forEach((data) => {
        // this.selectedData.push(data);
        // this.selection.select(...this.dataSource.data);
      });
    } else {
      // this.selectedData = [];
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
      total += data.total_quantity;
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
    customer_name: "John Doe",
    preorder_number: "PO12345",
    region: "North",
    total_quantity: 100,
    boxes: 10,
    address: "Bandula Street",
    status: "Shipped",
  },
  {
    no: 2,
    date: "2023-02-05",
    customer_name: "Jane Smith",
    preorder_number: "PO67890",
    region: "South",
    total_quantity: 75,
    boxes: 10,
    address: "Bandula Street",
    status: "Processing",
  },
  {
    no: 3,
    date: "2023-03-10",
    customer_name: "Bob Johnson",
    preorder_number: "PO54321",
    region: "West",
    total_quantity: 120,
    boxes: 10,
    address: "Lanmadaw Street",
    status: "Delivered",
  }
];
