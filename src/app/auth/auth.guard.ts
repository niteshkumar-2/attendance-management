import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); 
  const router = inject(Router); 
  const requiredRoles = route.data['roles'] as string[];
  if (authService.hasRole(requiredRoles)) {
    return true;
  }
  router.navigate(['/unauthorized']); 
  return false;
}

