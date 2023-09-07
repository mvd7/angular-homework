import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/features/people/interfaces/person.interface';

export const fetchPeople = createAction('FETCH_PEOPLE');

export const fetchPeopleSuccess = createAction(
  'FETCH_PEOPLE_SUCCESS',
  props<{ people: Person[] }>()
);
