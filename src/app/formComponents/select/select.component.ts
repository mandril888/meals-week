import { Component, OnInit } from '@angular/core';

export interface TypeMeal {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  types: TypeMeal[] = [
    { value: 'first', viewValue: 'First' },
    { value: 'second', viewValue: 'Second' },
    { value: 'both', viewValue: 'Both' },
    { value: 'unique', viewValue: 'Unique' },
  ];
}
