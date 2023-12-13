import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SalesStepperComponent } from 'src/app/components/sales-stepper/sales-stepper.component';
import { Preorder } from 'src/app/models/preorder';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent {
  constructor
    (
      @Inject(MAT_DIALOG_DATA) public data: Preorder,
      private api: ApiService,
    ) { }

  status: string[] = ['Accept Order', 'Stock Ready', 'Shipping', 'Delivered', 'Canclled']
  role: string = '';
  selectedStatus = '';

  ngOnInit() {
    console.log(this.data);
    this.role = sessionStorage.getItem('role')!;
  }

  async changeStatus() {
    console.log(this.selectedStatus);
    console.log('preorder id', this.data.id);

    const body = {
      preorder_id: this.data.id,
      status: this.selectedStatus
    }

    await this.api.changeOrderStatus(body);

  }
}
