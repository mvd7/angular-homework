import { AppState } from 'src/app/app.state';

export const selectPeople = (state: AppState) => state.people.people;
