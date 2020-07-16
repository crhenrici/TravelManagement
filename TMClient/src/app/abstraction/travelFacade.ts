import { TravelHttpService } from './../core/travel-http.service';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class TravelFacade {

  constructor(private httpService: TravelHttpService) {}

  public getData(): Observable<Person[]> {
    // handle this eventually with state management
   return this.httpService.getData();
  }

  public postData(person: any) {
    const newPerson: Person = {
      personId: null,
      name: person.name,
      birthday: person.birthday,
      notes: [person.note1, person.note2],
      bonusProgramm: [person.bonusprogramm1, person.bonusprogramm2],
      bonusProgrammId: [person.bonusprogrammId1, person.bonusprogrammId2],
      swisspassId: person.swisspassId,
      swisspassState: person.swisspassState,
      avisId: person.avisId,
      avisState: person.avisState,
      book: person.book,
      position: person.position,
      preferredSit: person.preferredSit
    };

    this.httpService.saveData(newPerson).subscribe();
  }
}
