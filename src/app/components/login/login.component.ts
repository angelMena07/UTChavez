import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup, NgForm} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
loading = false;

 // tslint:disable-next-line: max-line-length
 constructor(public afAuth: AngularFireAuth , private router: Router, public authService: AuthService) {
 }
 // tslint:disable-next-line: no-inferrable-types
 public email: string = '';
 // tslint:disable-next-line: no-inferrable-types
 public password: string = '';
 public isError = false;

 ngOnInit() {}


  onLogin(form: NgForm) {
  if (form.valid) {
    this.loading = true;
    this.authService.loginEmailUser(this.email, this.password).then
    ( (res) => {
    this.loading = false;
    this.onLoginRedirect();
    this.isError = false;
    }).catch( error => this.onIsError());
  } else {
 this.onIsError();
  }
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  onLoginRedirect(): void {
    /// MENA ESPECIFICA LA RUTA, CUANDO TE LOGUEES TE LLEVA A ELLA
    this.router.navigate(['/home']);
  }
  onIsError(): void {
    this.loading = false;
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }




}
