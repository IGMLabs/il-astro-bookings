import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { Trip } from './trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripsApi extends CrudApi<Trip> {
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'trips', statusStore);
  }

  public getByText$(text: string | null): Observable<Trip[]> {
    if (text === null || text == '') return this.getAll$();
    return this.http.get<Trip[]>(this.url + '?q=' + text); // .pipe(delay(3000));
  }
}
