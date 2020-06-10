import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }


  ngOnInit() {
  }

  onLogout() {
    this.authService.logout().then((data) => {
    if (data) {
      this.router.navigate(['/login']);
    }
    });
  }

}


