import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Meal } from './meal.model';

@Injectable({
  providedIn: 'root'
})
export class mealService {
  formData: Meal;

  constructor(private firestore: AngularFirestore) { }

  getMeals() {
    return this.firestore.collection('meals').snapshotChanges();
  }
}
