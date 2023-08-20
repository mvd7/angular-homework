import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    cars: Car[],
    direction: 'ascending' | 'descending' = 'ascending'
  ): Car[] {
    return cars.sort((a, b) => {
      if (direction === 'ascending') {
        // console.log(b.model);
        return a.model.localeCompare(b.model);
      } else {
        // console.log(a.model);
        return b.model.localeCompare(a.model);
      }
    });
  }
}
