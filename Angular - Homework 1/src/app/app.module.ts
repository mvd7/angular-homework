import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsListComponentComponent } from './components/cars-list-component/cars-list-component.component';
import { FilterOptionsComponentComponent } from './components/filter-options-component/filter-options-component.component';

@NgModule({
  declarations: [AppComponent, CarsListComponentComponent, FilterOptionsComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
