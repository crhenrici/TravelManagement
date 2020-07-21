import { Observable } from 'rxjs';
import { TravelHttpService } from './../core/travel-http.service';
import { Injectable } from '@angular/core';
import { Travel } from '../model/travel';
@Injectable({
  providedIn: 'root'
})
export class TravelFacade {

  constructor(private httpService: TravelHttpService) {}

  public getTravel(): Observable<Travel[]> {
    return this.httpService.getData();
  }
}

