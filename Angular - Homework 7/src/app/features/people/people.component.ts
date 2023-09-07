import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { fetchPeople } from 'src/app/store/people/people.actions';
import { Person } from './interfaces/person.interface';
import { selectPeople } from 'src/app/store/people/people.selector';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  people: Person[];

  ngOnInit(): void {
    this.store.dispatch(fetchPeople());

    this.store.pipe(select(selectPeople)).subscribe((peopleFromStore) => {
      this.people = peopleFromStore;
      console.log('PEOPLE FROM COMPONENT', this.people);
    });
  }
}
