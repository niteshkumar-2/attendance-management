import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === 'http://localhost:3000/attendance' && req.method === 'POST') {
      const mockResponse = {
        status: 'success',
        message: 'Attendance marked successfully!',
        data: req.body,
      };
      return of(new HttpResponse({ status: 200, body: mockResponse }));
    }

    if (req.url === 'http://localhost:3000/attendance' && req.method === 'GET') {
      const mockResponse = [
        {
          id: 1,
          image: 'data:image/png;base64,...',
          timestamp: '2023-10-01T12:00:00Z',
        },
        {
          id: 2,
          image: 'data:image/jpeg;base64,...',
          timestamp: '2023-10-02T12:00:00Z',
        },
      ];
      return of(new HttpResponse({ status: 200, body: mockResponse }));
    }
    return next.handle(req);
  }
}
