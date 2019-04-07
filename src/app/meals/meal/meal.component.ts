import { Component, OnInit } from '@angular/core';
import { mealService } from 'src/app/shared/meal.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class mealComponent implements OnInit {

  constructor(private service: mealService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      description: '',
      type: '',
      healthy: '',
      temperature: '',
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('meals').add(data);
    else
      this.firestore.doc('meals/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'MEAL Register');
  }

}
