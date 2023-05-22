import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/users.services";

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private userService: UserService) { }

  UserProfile!: any;
  HaveMovies: boolean = false;

  ngOnInit(): void {
    const userLoggedId: any = localStorage.getItem('User Logged')?.split(',')[1];

    this.userService.getUserProfile(userLoggedId).subscribe(
      (succesData) => this.UserProfile = succesData,
      (errData) => console.log(errData)
    )
  }

}
