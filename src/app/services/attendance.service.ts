import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private apiUrl = 'http://localhost:3000/attendance';

  constructor(private http: HttpClient) {}

  markAttendance(attendanceData: { image: string; timestamp: string }): Observable<any> {
    return this.http.post(this.apiUrl, attendanceData);
  }

  getAttendanceRecords(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
