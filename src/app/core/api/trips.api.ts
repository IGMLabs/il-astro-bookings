import { Injectable } from '@angular/core';
import { Trip } from './trip.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsApi {

    constructor(private http: HttpClient){

    }

  public getAll$():Observable<Trip[]>{
    return this.http.get<Trip[]>("http://localhost:3000/trips/");
  }

  public getById$(id: string):Observable<Trip>{
    return this.http.get<Trip>("http://localhost:3000/trips/"+id);
  }

  public post$(trip: Trip) {
    return this.http.post("http://localhost:3000/trips",trip);

  }
}
