import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
    constructor(
      public email: string,
      public password: string) { }
  }
  const users = [
    new User('admin@admin.com', '12345')
  ];

@Injectable()
export class AuthenticationService {

    constructor(
        private router: Router) { }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['Login']);
    }

    login(user) {
        const authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('user', 'authenticatedUser');
            this.router.navigate(['Home']);
            return true;
        }
        return false;
    }

    checkCredentials() {
        if (localStorage.getItem('user') === null) {
            this.router.navigate(['Login']);
        }
    }
}
