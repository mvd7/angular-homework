import { Component } from '@angular/core';
import { Car } from './interfaces/car.interface';
import { CarServiceService } from './services/car-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rent a Car';
}
