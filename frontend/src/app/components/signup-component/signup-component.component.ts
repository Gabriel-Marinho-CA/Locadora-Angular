import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/users.services";

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss'],
})
export class SignupComponent implements OnInit {

  formSignUp!: FormGroup;

  constructor(private UserService: UserService) { }

  onSubmit(): void {
    this.UserService.addUser(this.formSignUp.value).subscribe(
      (successData) => {
        alert("Usuário Cadastrado com sucesso :)");
        setTimeout(() => {
          window.location.href = "/login"
        }, 1200)
      }
      ,
      (errData) => console.log(errData)
    )
  }
  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+"),
      ]),
      password: new FormControl("", [Validators.required]),
    });
  }

}
