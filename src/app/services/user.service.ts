import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {users} from '../data/users2';

export interface User {
  id: number;
  name: string;
  email: string;
  position: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  findAllByName(query: string): Observable<User[]> {
    return of(users().filter((user: User) => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
  }
}
