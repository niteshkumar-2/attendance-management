import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-attendance',
  template: `
  <div class="attendance-container">
  <h2>Staff Attendance</h2>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    @for(record of attendanceRecords; track record){
            <tr>
            <td>{{ record.name }}</td>
        <td>{{ record.date }}</td>
        <td [class.present]="record.status === 'Present'" [class.absent]="record.status === 'Absent'">
          {{ record.status }}
        </td>
      </tr>
        }
    </tbody>
  </table>
</div>

  `,
  styles: `
  .roster-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background: #007bff;
  color: white;
}

  `
})
export class StaffAttendanceComponent {
  attendanceRecords = [
    { name: 'John Doe', date: '2025-02-01', status: 'Present' },
    { name: 'Jane Smith', date: '2025-02-01', status: 'Absent' },
    { name: 'Michael Johnson', date: '2025-02-01', status: 'Present' }
  ];
}
