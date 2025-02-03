import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login.component';
import { MarkAttendanceComponent } from './components/staff/mark-attendance.component';
import { StaffDashboardComponent } from './components/staff/staff-dashboard.component';
import { authGuard } from './auth/auth.guard';
import { RosterComponent } from './components/dashboard/roster/roster.component';
import { StaffAttendanceComponent } from './components/dashboard/staff-attendance.component';
import { StaffShiftsComponent } from './components/staff/staff-shifts.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [authGuard], data: { roles: ['manager'] } },
  { path: 'staff', component: StaffDashboardComponent,canActivate: [authGuard], data: { roles: ['staff'] } },
  { path: 'dashboard/roaster', component: RosterComponent, canActivate: [authGuard], data: { roles: ['manager'] } },
  { path: 'dashboard/staff-attendance', component: StaffAttendanceComponent, canActivate: [authGuard], data: { roles: ['manager'] } },
  { path: 'staff/mark-attendance', component: MarkAttendanceComponent, canActivate: [authGuard], data: { roles: ['staff'] } },
  { path: 'staff/shifts', component: StaffShiftsComponent, canActivate: [authGuard], data: { roles: ['staff'] } },
  { path: '**', redirectTo: '' }  
];
