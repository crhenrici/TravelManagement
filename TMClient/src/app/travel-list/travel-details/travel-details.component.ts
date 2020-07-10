import { Person } from './../../model/person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {

  selectedValue: Person;
  @Input()
  inputData: Person;

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

   trackByFn(index, item) {
     return index;
   }

  ngOnInit(): void {
  }

}
