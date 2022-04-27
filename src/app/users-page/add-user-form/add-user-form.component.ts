import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {

  userName = '';
  userSurname = '';
  @Output () onAddUser = new EventEmitter<{ name: string; surname: string; }>()

  addUser() {
    this.onAddUser.emit({
      name: this.userName,
      surname: this.userSurname
    })
    this.userName = '';
    this.userSurname = '';
  }
}
