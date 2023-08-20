import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import { cars_list } from '../data/cars_list';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars_list: Car[] = cars_list;
  originalArray: Car[] = [...this.cars_list];
  filteredCars: Car[] = [];

  constructor() {}

  getAllCars(): Car[] {
    return this.cars_list;
  }

  onReturnCar = (carId: number) => {
    this.cars_list = this.cars_list.map((car) => {
      if (car.id === carId && car.isRented === true) {
        return {
          ...car,
          isRented: false,
        };
      }
      return car;
    });
  };

  onRentCar = (carId: number) => {
    this.cars_list = this.cars_list.map((car) => {
      if (car.id === carId && car.isRented === false) {
        return {
          ...car,
          isRented: true,
        };
      }
      return car;
    });
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
