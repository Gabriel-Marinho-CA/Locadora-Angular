import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users.services';
import { User } from 'src/app/models/users.models';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponent implements OnInit {
  formSignIn!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private UserService: UserService) { }


  onSubmit(): void {
    this.UserService.getUser(this.formSignIn.value).subscribe(

      (successData: User) => {
        const userLogged = {
          name: successData.name,
          id: successData._id
        }

        localStorage.setItem('User Logged', `${userLogged.name},${userLogged.id}`);

        setTimeout(() => window.location.href = "/", 1000)
      },
      (errData) => console.log(errData)
    )
  }

  ngOnInit(): void {
    this.formSignIn = this.FormBuilder.group({
      email: [null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
      ]],
      password: [null, Validators.required]
    })
  }
}