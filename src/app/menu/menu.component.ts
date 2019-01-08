import { Component, OnInit } from '@angular/core';
import { AuthsystemService } from '../services/authsystem.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authSystem : AuthsystemService) { }
  isLogIn;
  isUserLogin;
  ngOnInit() {
    this.authSystem.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogIn = true;
        this.isUserLogin = auth.email;
      } else {
        this.isLogIn = false;
      }
      });
  }
  userLogout () {
    this.authSystem.userDisconnect();
    }
}
