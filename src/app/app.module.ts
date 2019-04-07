import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { mealsComponent } from './meals/meals.component';
import { mealComponent } from './meals/meal/meal.component';
import { mealListComponent } from './meals/meal-list/meal-list.component';
import { mealService } from './shared/meal.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    mealsComponent,
    mealComponent,
    mealListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    mealService,
    { provide: FirestoreSettingsToken, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
