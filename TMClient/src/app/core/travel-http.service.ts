import { Person } from './../model/person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TravelHttpService {

  httpUrl = 'http://localhost:9010/person';
  constructor(private http: HttpClient) { }

  public getData(): Observable<Person[]> {
    const url = `${this.httpUrl}/fetchAll`;
    return this.http.get<Person[]>(url, httpOptions);
  }

  public saveData(person: Person): Observable<Person> {
    const url = `${this.httpUrl}/save`;
    console.log('Person: ', person);
    // TODO: add error handling
    return this.http.post<Person>(url, person, httpOptions);
  }
}
