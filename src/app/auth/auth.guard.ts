import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router
  const requiredRoles = route.data['roles'] as string[];
  if (authService.hasRole(requiredRoles)) {
    return true;
  }
  router.navigate(['/unauthorized']); // Redirect to an unauthorized page
  return false;
}

