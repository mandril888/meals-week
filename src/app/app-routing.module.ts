import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mealListComponent } from './meals/meal-list/meal-list.component';
import { mealsComponent } from './meals/meals.component';


const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  { path: 'list', component: mealListComponent },
  { path: 'meals', component: mealsComponent },
  { path: '**', redirectTo: 'meals' },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
