import { TravelHttpService } from './../core/travel-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable()
export class TravelFacade {

  constructor(private httpService: TravelHttpService) {}

  public getData(): Observable<Person[]> {
    // handle this eventually with state management
    return this.httpService.getData();
  }
}
