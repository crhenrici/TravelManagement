import { PersonFacade } from '../abstraction/personFacade';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  personForm = new FormGroup({
    name: new FormControl(''),
    bonusprogramm1: new FormControl(''),
    bonusprogrammId1: new FormControl(''),
    swisspassState: new FormControl(''),
    book: new FormControl(''),
    note1: new FormControl(''),
    birthdate: new FormControl(''),
    bonusprogramm2: new FormControl(''),
    bonusprogrammId2: new FormControl(''),
    swisspassId: new FormControl(''),
    preferredSit: new FormControl(''),
    preferredSit2: new FormControl(''),
    note2: new FormControl(''),
    position: new FormControl(''),
    avisState: new FormControl(''),
    avisId: new FormControl('')
  });

  constructor(private personFacade: PersonFacade) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.personFacade.postData(this.personForm.value);
  }

}
