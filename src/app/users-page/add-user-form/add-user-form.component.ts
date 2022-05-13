import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {

  userId = 0;
  userName = '';
  userSurname = '';
  @Output() onAddUser = new EventEmitter<{ id: number; name: string; surname: string; }>();
  @Input('userData') user!: { id: number; name: string; surname: string; };

  addUser() {
    this.onAddUser.emit({
      id: this.userId,
      name: this.userName,
      surname: this.userSurname
    })
    this.userName = '';
    this.userSurname = '';
  }
}
