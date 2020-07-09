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
  selectedValue: Person;

  constructor() { }

  get selectedValueBirthday() {
    return (this.selectedValue && this.selectedValue.birthday) ? this.selectedValue.birthday : null;
  }

  get selectedValueAvisState() {
    return (this.selectedValue && this.selectedValue.avisState) ? this.selectedValue.avisState : null;
  }

  get selectedValuePosition() {
    return (this.selectedValue && this.selectedValue.position) ? this.selectedValue.position : null;
  }

  get selectedValueAvisId() {
    return (this.selectedValue && this.selectedValue.avisId) ? this.selectedValue.avisId : null;
  }

  get selectedValueSwisspassState() {
    return (this.selectedValue && this.selectedValue.swisspassState) ? this.selectedValue.swisspassState : null;
  }

  get selectedValueSwisspassId() {
    return (this.selectedValue && this.selectedValue.swisspassId) ? this.selectedValue.swisspassId : null;
  }

  get selectedValueBook() {
    return (this.selectedValue && this.selectedValue.book) ? this.selectedValue.book : null;
  }

  get selectedValuePreferredSit() {
    return (this.selectedValue && this.selectedValue.preferredSit) ? this.selectedValue.preferredSit : null;
  }

  get selectedValueNotes() {
    return (this.selectedValue && this.selectedValue.notes) ? this.selectedValue.notes : [];
   }

  ngOnInit(): void {
  }

}
