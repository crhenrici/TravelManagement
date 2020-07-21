import { Observable, Subscription } from 'rxjs';
import { PersonFacade } from '../abstraction/personFacade';
import { Person } from './../model/person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  fakeData: Person[];

  constructor(private personFacade: PersonFacade) { }

  ngOnInit(): void {
    this.personFacade.getData().subscribe(data => {
      this.fakeData = data;
    });
  }

}
