import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceMockService {
  private attendanceRecords: any[] = [];

  markAttendance(attendanceData: { image: string; timestamp: string }): Observable<any> {
    this.attendanceRecords.push(attendanceData);
    return of({ status: 'success', message: 'Attendance marked successfully!' });
  }

  getAttendanceRecords(): Observable<any[]> {
    return of(this.attendanceRecords);
  }
}
