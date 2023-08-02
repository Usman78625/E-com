import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private qouteUrl = 'assets/qoute.json'

  constructor(private http: HttpClient) { }

  getRandomQoute(): Observable<any> {
    return this.http.get<any[]>(this.qouteUrl).pipe(
      map(qoutes => qoutes[Math.floor(Math.random()*qoutes.length)])
    )
  }

}
