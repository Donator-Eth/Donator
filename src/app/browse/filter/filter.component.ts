import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent {

  myRequestsSelected!: boolean;
  myDonationsSelected!: boolean;
  startDate!: FormControl;
  endDate!: FormControl;

  maxDate!: Date;

  constructor() {
    this.myRequestsSelected = false;
    this.myDonationsSelected = false;
    this.startDate = new FormControl(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)); // 7 days ago
    this.endDate = new FormControl(new Date());
    this.maxDate = new Date(Date.now());
  }

}
