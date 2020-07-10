import { Person } from './../model/person';
import { Component, OnInit, Input } from '@angular/core';

const data: Person[] = [{ name: 'Cristian Henrici', birthday: new Date(1998, 1, 31), position: 'Software Engineer', bonusProgramm: ['some program', 'some other program'], swisspassState: true, swisspassId: '123', avisState: true, avisId: '12421', preferredSit: 'there', book: 'yes', notes: ['affa', 'faasfa']}];
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  fakeData = data;


  constructor() { }

  ngOnInit(): void {
  }

}
