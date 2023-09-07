import { ActionReducerMap } from '@ngrx/store';
import { PeopleState, peopleReducer } from './store/people/people.reducer';

export interface AppState {
  people: PeopleState;
}

export const appReducer: ActionReducerMap<AppState> = {
  people: peopleReducer,
};
