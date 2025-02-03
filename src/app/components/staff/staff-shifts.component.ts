import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-staff-shifts',
  standalone: true,
  template: `
  <div class="shifts-container">
  <h2>My Shifts</h2>

  <div class="shifts-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Shift Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      @for(shift of shifts; track shift){
            <tr>
            <td>{{ shift.date }}</td>
          <td>{{ shift.startTime }} - {{ shift.endTime }}</td>
          <td>{{ shift.status }}</td>
      </tr>
        }
      </tbody>
    </table>
  </div>
</div>

  `,
  styles:`
  .shifts-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
}

.shifts-table {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 8px;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #007bff;
  color: white;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

td {
  font-size: 16px;
}

  `
})
export class StaffShiftsComponent {

  shifts = [
    { date: '2025-02-01', startTime: '9:00 AM', endTime: '5:00 PM', status: 'Assigned' },
    { date: '2025-02-02', startTime: '10:00 AM', endTime: '6:00 PM', status: 'Assigned' },
    { date: '2025-02-03', startTime: '8:00 AM', endTime: '4:00 PM', status: 'Assigned' },
    { date: '2025-02-04', startTime: '9:00 AM', endTime: '5:00 PM', status: 'Assigned' }
  ];

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout()
  }
}
