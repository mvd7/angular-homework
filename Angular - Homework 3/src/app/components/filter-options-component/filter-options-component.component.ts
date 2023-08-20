import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-filter-options-component',
  templateUrl: './filter-options-component.component.html',
  styleUrls: ['./filter-options-component.component.css'],
})
export class FilterOptionsComponentComponent {
  @Output() showRented = new EventEmitter<number>();
  @Output() showAvailable = new EventEmitter<number>();
  @Output() resetFilter = new EventEmitter<number>();

  onShowRented = () => {
    this.showRented.emit();
  };

  onShowAvailable = () => {
    this.showAvailable.emit();
  };

  onResetFilter = () => {
    this.resetFilter.emit();
  };
}
