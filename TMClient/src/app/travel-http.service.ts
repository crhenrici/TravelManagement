import { MockData } from './model/mockData';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TravelHttpService {

  constructor(private mockData: MockData) { }

  public getData() {
    return this.mockData;
  }
}
