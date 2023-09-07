import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { PeopleService } from 'src/app/features/people/people.service';
import { fetchPeople, fetchPeopleSuccess } from './people.actions';
import { Person } from 'src/app/features/people/interfaces/person.interface';

@Injectable()
export class PeopleEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly peopleService: PeopleService
  ) {}

  fetchPeople$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchPeople),
      switchMap(() =>
        this.peopleService
          .getPeople()
          .pipe(map((people: Person[]) => fetchPeopleSuccess({ people })))
      )
    );
  });
}
