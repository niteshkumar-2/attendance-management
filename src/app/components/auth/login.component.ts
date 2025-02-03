import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  user: any = {}

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(){
    this.user = this.authService.getUser();
    if(this.user){
      if(this.user.roles === 'manager'){
        this.router.navigate(['/dashboard']);
      }else if(this.user.roles === 'staff'){
        this.router.navigate(['/staff']);
      }else{
        console.log('defualt login page')
      }
    }
  }

  login() {
    if (this.username === 'manager' && this.password === 'admin123') {
      this.authService.login({username:this.username,password:this.password,roles:'manager'})
      this.router.navigate(['/dashboard']);
    } else if (this.username === 'staff' && this.password === 'staff123') {
      this.authService.login({username:this.username,password:this.password,roles:'staff'})
      this.router.navigate(['/staff']);
    } else {
      alert('Invalid credentials');
    }
  }
}
