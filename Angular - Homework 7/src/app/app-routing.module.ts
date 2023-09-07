import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PeopleComponent } from './features/people/people.component';
import { AboutComponent } from './features/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'people', component: PeopleComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
