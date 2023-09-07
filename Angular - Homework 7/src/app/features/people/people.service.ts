import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './interfaces/person.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private readonly http: HttpClient) {}
  private readonly URL = 'https://swapi.dev/api/people';

  getPeople(): Observable<Person[]> {
    return this.http.get<{ results: any[] }>(this.URL).pipe(
      map((data) => data.results),
      map((people) =>
        people.map((person) => ({
          fullName: person.name,
          gender: person.gender,
          birthYear: person.birth_year,
          height: person.height,
          mass: person.mass,
        }))
      )
    );
  }
}
