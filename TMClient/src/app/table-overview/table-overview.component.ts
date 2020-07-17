import { Stay } from './../model/stay';
import { Travel } from './../model/travel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css']
})
export class TableOverviewComponent implements OnInit {

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
