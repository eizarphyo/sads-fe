import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface StatusData {
  status: 'Pending' | 'Requesting' | 'Accepted' | 'Rejected';
}

@Component({
  selector: 'app-permit-dialog',
  templateUrl: './permit-dialog.component.html',
  styleUrls: ['./permit-dialog.component.css'],
})
export class PermitDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: StatusData) { }
}
