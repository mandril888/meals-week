import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/shared/meal.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.sass']
})
export class MealComponent implements OnInit {

  constructor(private service: MealService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '', // nombre de la comida
      type: '', // primero, segundo, poste
      sano: '',
    }
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.firestore.collection('meals').add(data);
    this.resetForm(form);
  }

}
