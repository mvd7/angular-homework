import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list-component',
  templateUrl: './cars-list-component.component.html',
  styleUrls: ['./cars-list-component.component.css'],
})
export class CarsListComponentComponent implements OnInit {
  header = 'List of our cars';

  @Input()
  cars_list: Car[] = [];

  originalArray: Car[] = [];

  ngOnInit() {
    this.originalArray = [...this.cars_list];
  }

  filteredCars: Car[] = [];

  @Output() carIdToRent = new EventEmitter<number>();
  @Output() carIdToReturn = new EventEmitter<number>();

  rentCar = (carId: number) => {
    this.carIdToRent.emit(carId);
  };

  returnCar = (carId: number) => {
    this.carIdToReturn.emit(carId);
  };

  allRentedCars = () => {
    this.filteredCars = this.originalArray.filter((car) => car.isRented);
    this.cars_list = this.filteredCars;
  };

  allAvailableCars = () => {
    this.filteredCars = this.originalArray.filter((car) => !car.isRented);
    this.cars_list = this.filteredCars;
  };

  fullReset = () => {
    this.cars_list = this.originalArray;
  };
}
