import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Travel } from '../model/travel';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TravelHttpService {

  httpUrl = 'http://localhost:9010/travel';
  constructor(private http: HttpClient) { }

  public getData(): Observable<Travel[]> {
    const url = `${this.httpUrl}/fetchAll`;
    return this.http.get<Travel[]>(url, httpOptions);
  }

  public saveData(travel: Travel): Observable<Travel> {
    const url = `${this.httpUrl}/save`;
    return this.http.post<Travel>(url, travel, httpOptions);
  }
}
