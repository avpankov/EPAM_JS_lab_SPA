import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
  selector: 'app-mat-table',
  styleUrls: ['mat-table.component.scss'],
  templateUrl: 'mat-table.component.html',
})
export class MatTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'age', 'gender'];
  dataSource = new MatTableDataSource(USER_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}