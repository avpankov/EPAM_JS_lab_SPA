import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Users {
  name: string;
  position: number;
  age: number;
  gender: string;
}

const USER_DATA: Users[] = [
  {position: 1, name: 'Artyom Pankov', age: 28, gender: 'M'},
  {position: 2, name: 'John Doe', age: 46, gender: 'M'},
  {position: 3, name: 'Marie Smith', age: 38, gender: 'F'},
  {position: 4, name: 'Hans Andersen', age: 57, gender: 'M'},
  {position: 5, name: 'Alex Johnson', age: 55, gender: 'M'},
  {position: 6, name: 'Vin Diesel', age: 56, gender: 'M'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'age', 'gender'];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<Users> {
  data = new BehaviorSubject<Users[]>(USER_DATA);

  connect(): Observable<readonly Users[]> {
    return this.data;
  }

  disconnect(): void {}
}
