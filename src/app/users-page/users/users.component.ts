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
    name: 'Artyom',
    surname: 'Pankov'
  }, {
    name: 'John',
    surname: 'Doe'
  }, {
    name: 'Marie',
    surname: 'Smith'
  }, {
    name: 'Hans',
    surname: 'Andersen'
  }, {
    name: 'Alex',
    surname: 'Johnson'
  }, {
    name: 'Vin',
    surname: 'Diesel'
  }]

  addUser(user: { name: string; surname: string; }) {
    this.users.push(user)
  }
}
