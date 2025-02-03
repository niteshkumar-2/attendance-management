import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  imports: [RouterLink],
  standalone: true,
  template: `
    <div class="staff-dashboard">
      <div class="dashboard-card">
        <h2>Welcome, {{ staffName }}</h2>

        <div class="dashboard-actions">
          <a routerLink="/staff/shifts" class="btn">📋 View Shifts</a>
          <a routerLink="/staff/mark-attendance" class="btn"
            >📸 Mark Attendance</a
          >
        </div>

        <button (click)="logout()" class="logout-btn">🚪 Logout</button>
      </div>
    </div>
  `,
  styles: `
  .staff-dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
}

.dashboard-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h2 {
  color: #333;
}

.dashboard-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  background: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;
  text-align: center;
}

.btn:hover {
  background: #0056b3;
}

.logout-btn {
  background: #dc3545;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
}

.logout-btn:hover {
  background: #a71d2a;
}

  `,
})
export class StaffDashboardComponent {
  staffName = 'John Doe';

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
