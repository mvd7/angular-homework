import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarServiceService } from 'src/app/services/car-service.service';
import { cars_list } from 'src/app/data/cars_list';

@Component({
  selector: 'app-cars-list-component',
  templateUrl: './cars-list-component.component.html',
  styleUrls: ['./cars-list-component.component.css'],
})
export class CarsListComponentComponent implements OnInit, DoCheck {
  constructor(private readonly carService: CarServiceService) {}

  header = 'List of our cars';

  cars_list = cars_list;

  originalArray: Car[] = [];

  ngDoCheck(): void {
    this.cars_list = this.carService.getAllCars();
  }

  ngOnInit() {
    this.originalArray = [...this.cars_list];
  }

  filteredCars: Car[] = [];

  selectedSortOption: 'ascending' | 'descending' = 'ascending';

  rentCar = (carId: number) => {
    this.carService.onRentCar(carId);
  };

  returnCar = (carId: number) => {
    this.carService.onReturnCar(carId);
  };

  allRentedCars = () => {
    this.carService.allRentedCars();
  };

  allAvailableCars = () => {
    this.carService.allAvailableCars();
  };

  fullReset = () => {
    this.carService.fullReset();
  };
}
