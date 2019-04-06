import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { mealService } from 'src/app/shared/meal.service';
import { Meal } from 'src/app/shared/meal.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class mealListComponent implements OnInit {

  list: Meal[];
  constructor(private service: mealService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getMeals().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Meal;
      })
    });
  }

  onEdit(meal: Meal) {
    this.service.formData = Object.assign({}, meal);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this meal?")) {
      this.firestore.doc('meals/' + id).delete();
      this.toastr.warning('Deleted successfully','MEAL Register');
    }
  }

}
