import { Injectable } from '@angular/core';
import { Meal } from './meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  formData: Meal;

  constructor() { }
}
