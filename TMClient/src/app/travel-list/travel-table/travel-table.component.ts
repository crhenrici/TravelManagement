import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.css']
})
export class TravelTableComponent implements OnInit {

  displayedColumns = ['travelID', 'departDate', 'departTime', 'departPlace', 'departCountry', 'arriveDate', 'arriveTime', 'arrivePlace', 'arriveCountry', 'promoCompany', 'bookReference',
  'bookState', 'price', 'payState', 'travelReason', 'comments'];
  dispColumns = ['stayID', 'checkInDate', 'checkOutDate', 'place', 'country', 'accomodation', 'room', 'bookState', 'paymentState',
  'price', 'rating', 'purpose', 'comment', 'reserve1', 'reserve2', 'reserve3'];

  constructor() { }

  ngOnInit(): void {
  }

}
