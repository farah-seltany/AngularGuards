import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  role: string = 'USER';

  constructor() { }

  getRole()
  {
    return this.role;
  }
}
