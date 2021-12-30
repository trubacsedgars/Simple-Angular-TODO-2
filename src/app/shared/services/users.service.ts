import {Injectable} from "@angular/core";
import {AddUserQuery, CountryCodeType, User} from "../models/user.model";
import { v4 as idGenerator } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users: User[] = [
    {
      id: '1231241424234ffffsfa',
      name: 'Kecups',
      surname: 'Stanislovs',
      country: CountryCodeType.LV
    }
  ]

  getUsers(): User[] {
    return this.users
  }

  addUser(query: AddUserQuery): User[] {
    const newUser = {
      id: idGenerator(),
      ...query
    }
    this.users.push(newUser)
    return this.users
  }
}
