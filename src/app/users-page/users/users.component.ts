import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  searchUser = ''

  filterTypes = [{
    type: 'name',
    text: 'name'
  }, {
    type: 'surname',
    text: 'surname'
    }]
  
  defaultType = 'name'

  users = [{
    id: 1,
    name: 'Artyom',
    surname: 'Pankov'
  }, {
    id: 2,
    name: 'John',
    surname: 'Doe'
  }, {
    id: 3,
    name: 'Marie',
    surname: 'Smith'
  }, {
    id: 4,
    name: 'Hans',
    surname: 'Andersen'
  }, {
    id: 5,
    name: 'Alex',
    surname: 'Johnson'
  }, {
    id: 6,
    name: 'Vin',
    surname: 'Diesel'
  }]

  addUser(user: { id: number; name: string; surname: string; }) {
    this.users.push(user)
  }
}
