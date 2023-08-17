import { Component } from '@angular/core';
import { Car } from './interfaces/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rent a Car';

  cars: Car[] = [
    {
      id: 1,
      model: 'Volkswagen Golf 7.5 GTD',
      engineType: '2.0 TDI 184hp',
      yearOfProduction: '2019',
      priceToRent: 120,
      image:
        'https://www.njuskalo.hr/image-w920x690/auti/vw-golf-7.5-gtd-matrix-led-virtual-acc-kamera-slika-193653454.jpg',
      isRented: true,
    },
    {
      id: 2,
      model: 'Volkswagen Tiguan II',
      engineType: '2.0 TDI 200hp',
      yearOfProduction: '2020',
      priceToRent: 185,
      image:
        'https://www.thecarexpert.co.uk/wp-content/uploads/2022/08/Volkswagen-Tiguan-R-1200x630-cropped.jpg',
      isRented: false,
    },
    {
      id: 3,
      model: 'Mercedes E220 W212',
      engineType: '2.2 CDI 170hp',
      yearOfProduction: '2012',
      priceToRent: 85,
      image:
        'https://www.auto-data.net/images/f107/Mercedes-Benz-E-class-W212.jpg',
      isRented: false,
    },
    {
      id: 4,
      model: 'Mercedes C63S',
      engineType: '4.0 V8 503hp',
      yearOfProduction: '2017',
      priceToRent: 275,
      image:
        'https://cdn-fastly.autoguide.com/media/2023/06/07/12316945/2017-mercedes-amg-c63-s-coupe-review.jpg?size=720x845&nocrop=1',
      isRented: false,
    },
    {
      id: 5,
      model: 'BMW 3 Series',
      engineType: '2.0 Turbo 248hp',
      yearOfProduction: '2022',
      priceToRent: 155,
      image:
        'https://parkers-images.bauersecure.com/wp-images/174840/bmw_3_series_050.jpg',
      isRented: true,
    },
    {
      id: 6,
      model: 'Ford Mustang GT',
      engineType: '5.0 V8 450hp',
      yearOfProduction: '2021',
      priceToRent: 225,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/2021-ford-mustang-mach-1-109-1592231891.jpg?crop=0.691xw:0.779xh;0.208xw,0.0625xh&resize=640:*',
      isRented: false,
    },

    {
      id: 8,
      model: 'Audi Q5',
      engineType: '2.0 TFSI 248hp',
      yearOfProduction: '2022',
      priceToRent: 195,
      image:
        'https://media.ed.edmunds-media.com/audi/q5/2022/oem/2022_audi_q5_4dr-suv_prestige-s-line_fq_oem_1_1600.jpg',
      isRented: true,
    },
  ];

  onReturnCar = (carId: number) => {
    this.cars = this.cars.map((car) => {
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
    this.cars = this.cars.map((car) => {
      if (car.id === carId && car.isRented === false) {
        return {
          ...car,
          isRented: true,
        };
      }
      return car;
    });
  };
}
