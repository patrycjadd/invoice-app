import { Injectable } from '@angular/core';

export enum Role {
  USER = 'user',
  ADMIN = 'admin'
}

@Injectable({ providedIn: 'root'})
export class AuthService {
  user = {
    roles: ['user', 'admin'],
  }

  hasRole(roles: Role[]): boolean {
    return roles.some(role => this.user.roles.includes(role));
  }
}
