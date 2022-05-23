import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter',
  pure: false
  
})
export class UsersFilterPipe implements PipeTransform {

  transform(usersList: any, searchUser: string, field: any) {
    if (usersList.length === 0 || searchUser === '') {
      return usersList;
    }

    return usersList.filter((user: any) => user[`${field}`].toLowerCase().indexOf(searchUser.toLowerCase()) !== -1);
    
  }

}
