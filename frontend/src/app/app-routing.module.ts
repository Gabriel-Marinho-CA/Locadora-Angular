import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component.component';
import { MoviesService } from './services/movies.services';
import { CatalogComponent } from './components/catalog-component/catalog-component.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { SignupComponent } from './components/signup-component/signup-component.component';
import { UserService } from './services/users.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: CatalogComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MoviesService,
    UserService,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
