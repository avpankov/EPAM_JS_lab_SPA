import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users = [{
    name: 'Artyom',
    surname: 'Pankov'
  }]

  addUser(user: { name: string; surname: string; }) {
    this.users.push(user)
  }
}
