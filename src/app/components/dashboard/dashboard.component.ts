import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styles: `
/* Dashboard Container */
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

/* Dashboard Card */
.dashboard-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

/* Dashboard Title */
.dashboard-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* Actions Container */
.dashboard-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
}

/* Primary Button */
.btn-primary {
  background: #007bff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #0056b3;
}

/* Secondary Button */
.btn-secondary {
  background: #6c757d;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background: #545b62;
}

/* Logout Button */
.btn-danger {
  background: #dc3545;
  color: white;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.btn-danger:hover {
  background: #c82333;
}

/* Responsive Design */
@media (min-width: 600px) {
  .dashboard-actions {
    flex-direction: row;
    justify-content: center;
  }

  .btn {
    flex: 1;
  }
}
`
})
export class DashboardComponent {
  managerName = 'John Doe';

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout()
  }
}
