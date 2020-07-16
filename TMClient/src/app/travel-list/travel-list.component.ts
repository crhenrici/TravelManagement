import { Observable, Subscription } from 'rxjs';
import { TravelFacade } from './../abstraction/travelFacade';
import { Person } from './../model/person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  fakeData: Person[];

  constructor(private travelFacade: TravelFacade) { }

  ngOnInit(): void {
    this.travelFacade.getData().subscribe(data => {
      this.fakeData = data;
    });
  }

}
