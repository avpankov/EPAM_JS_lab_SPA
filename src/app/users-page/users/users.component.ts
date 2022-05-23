import { Component } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users = users;
  
  searchUser = ''

  filterTypes = [{
    type: 'name',
    text: 'name'
  }, {
    type: 'surname',
    text: 'surname'
    }]
  
  defaultType = 'name'

  addUser(user: { id: number; name: string; surname: string; }) {
    this.users.push(user)
  }
}
