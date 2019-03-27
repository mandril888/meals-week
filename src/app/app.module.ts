import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meals/meal/meal.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealService } from './shared/meal.service';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealComponent,
    MealListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
