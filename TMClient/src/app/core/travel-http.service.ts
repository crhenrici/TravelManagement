import { Person } from './../model/person';
import { MockData } from '../model/mockData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TravelHttpService {

  httpUrl = 'http://localhost:8080';
  constructor(private mockData: MockData, private http: HttpClient) { }

  public getData() {
    const url = `${this.httpUrl}/person/fetchAll`;
    return this.http.get<Person[]>(url, httpOptions);
  }

  public saveData() {}
}
