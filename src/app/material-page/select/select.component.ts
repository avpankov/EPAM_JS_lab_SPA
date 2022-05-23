import { Component } from '@angular/core';

interface Cars {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  cars: Cars[] = [
    {value: 'mazda', viewValue: 'Mazda'},
    {value: 'ford', viewValue: 'Ford'},
    {value: 'bmw', viewValue: 'BMW'},
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'hyundai', viewValue: 'Hyundai'},
  ];

}
