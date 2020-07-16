import { Stay } from './../../model/stay';
import { Travel } from './../../model/travel';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-travel-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.css']
})
export class TravelTableComponent implements OnInit {

  displayedColumns = ['travelID', 'departDate', 'departTime', 'departPlace', 'departCountry', 'arriveDate', 'arriveTime', 'arrivePlace', 'arriveCountry', 'promoCompany', 'bookReference',
  'bookState', 'price', 'payState', 'travelReason', 'comments'];
  dispColumns = ['stayID', 'checkInDate', 'checkInTime', 'checkOutDate', 'checkOutTime', 'place', 'country', 'accomodation', 'room', 'bookState', 'paymentState',
  'price', 'rating', 'purpose', 'comment', 'reserve1', 'reserve2', 'reserve3'];

  tableTravel: MatTableDataSource<Travel>;
  tableStay: MatTableDataSource<Stay>;

  constructor() { }

  ngOnInit(): void {
  }

}
