// import { Component } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { WebcamImage } from 'ngx-webcam';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { WebcamModule } from 'ngx-webcam';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-mark-attendance',
//   standalone: true,
//   imports: [WebcamModule, MatCardModule, MatButtonModule, CommonModule],
//   templateUrl: './mark-attendance.component.html',
// })
// export class MarkAttendanceComponent {
//   trigger: Subject<void> = new Subject<void>();
//   webcamImage: WebcamImage | null = null;

//   get triggerObservable(): Observable<void> {
//     return this.trigger.asObservable();
//   }

//   captureImage(): void {
//     this.trigger.next();
//   }

//   handleImage(image: WebcamImage): void {
//     this.webcamImage = image;
//   }

//   confirmAttendance(): void {
//     if (this.webcamImage) {
//       console.log('Attendance marked with image:', this.webcamImage.imageAsDataUrl);
//       alert('Attendance marked successfully!');
//     } else {
//       alert('Please capture an image first.');
//     }
//   }
// }

import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WebcamModule } from 'ngx-webcam';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance.service'; // Add this import
import { MatSnackBar } from '@angular/material/snack-bar'; // Add this import
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [WebcamModule, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './mark-attendance.component.html',
  styles: `
  .attendance-card {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.camera-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.webcam-section, .image-section {
  width: 45%;
}

.webcam-section webcam {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Makes sure the webcam feed covers the space */
  border-radius: 8px;
}

.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.captured-image {
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.capture-btn, .confirm-btn {
  margin-top: 10px;
}

.capture-btn {
  width: 100%;
}

.confirm-btn {
  width: 100%;
  margin-top: 20px;
}

.logout-button {
  margin-top: 20px;
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

  `
})
export class MarkAttendanceComponent {
  private trigger: Subject<void> = new Subject<void>();

  webcamImage: WebcamImage | null = null;

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor(
    private attendanceService: AttendanceService,
    private snackBar: MatSnackBar,
    private authService : AuthService
  ) {}

  captureImage(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    console.log('Image captured:', webcamImage.imageAsDataUrl);
  }
  logout(){
    this.authService.logout()
  }

  //   handleImage(image: WebcamImage): void {
//     this.webcamImage = image;
//   }

//   confirmAttendance(): void {
//     if (this.webcamImage) {
//       console.log('Attendance marked with image:', this.webcamImage.imageAsDataUrl);
//       alert('Attendance marked successfully!');
//     } else {
//       alert('Please capture an image first.');
//     }
//   }
  // Method to confirm attendance
  confirmAttendance(): void {
    if (this.webcamImage) {
      const attendanceData = {
        image: this.webcamImage.imageAsDataUrl,
        timestamp: new Date().toISOString(),
      };
      this.attendanceService.markAttendance(attendanceData).subscribe({
        next: () => {
          this.snackBar.open('Attendance marked successfully!', 'Close', {
            duration: 3000,
          });
          this.webcamImage = null; 
        },
        error: (err) => {
          this.snackBar.open('Failed to mark attendance. Please try again.', 'Close', {
            duration: 3000,
          });
          console.error('Error marking attendance:', err);
        },
      });
    } else {
      this.snackBar.open('No image captured. Please capture an image first.', 'Close', {
        duration: 3000,
      });
    }
  }
}
