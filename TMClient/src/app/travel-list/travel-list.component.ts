import { MockData } from './../model/mockData';
import { Stay } from './../model/stay';
import { Travel } from './../model/travel';
import { TravelHttpService } from './../travel-http.service';
import { Person } from './../model/person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  fakeData: Person[];
  mockData: MockData;

  constructor(private travelService: TravelHttpService) { }

  ngOnInit(): void {
   this.mockData = this.travelService.getData();
   this.fakeData = this.mockData.dataPerson;
  }

}
