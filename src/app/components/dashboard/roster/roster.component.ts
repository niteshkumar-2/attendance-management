import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-roster',
  template: `
  <div class="roster-container">
  <h2>Staff Roster</h2>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
        @for(staff of staffList; track staff){
            <tr>
        <td>{{ staff.name }}</td>
        <td>{{ staff.role }}</td>
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
export class RosterComponent {
  staffList = [
    { name: 'John Doe', role: 'Engineer' },
    { name: 'Jane Smith', role: 'HR' },
    { name: 'Michael Johnson', role: 'Manager' }
  ];
}
