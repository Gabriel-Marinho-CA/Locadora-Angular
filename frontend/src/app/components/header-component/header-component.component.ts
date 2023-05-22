import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogged: Boolean = false

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('User Logged')) {
      this.userLogged = true;
    }
  }
  loggout(): void {
    localStorage.clear();
    setTimeout(() => { window.location.href = "/" }, 1000)
  }
  redirectToProfile(): void {
    const userLoggedId: any = localStorage.getItem('User Logged')?.split(',')[1];

    window.location.href = `/profile/${userLoggedId}`
  }
}
