import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null;

  constructor(private router: Router) {}

  // Simulate login
  login(userData: { username: string; password : string ; roles: string ;}) {
    this.user = userData;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  // Get current user
  getUser() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user') || 'null');
    }
    return this.user;
  }

  // Check if user has a required role
  hasRole(allowedRoles: string[]): boolean {
    const user = this.getUser();
    console.log(user)
    return user && allowedRoles.includes(user.roles);
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}