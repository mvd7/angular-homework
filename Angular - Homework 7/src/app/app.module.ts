import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './store/people/people.effects';
import { PeopleComponent } from './features/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PeopleComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([PeopleEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
