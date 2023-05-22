
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component.component';
import { CatalogComponent } from '../components/catalog-component/catalog-component.component';
import { LoginComponent } from '../components/login-component/login-component.component';
import { SignupComponent } from '../components/signup-component/signup-component.component';
import { CartComponent } from '../components/cart-component/cart-component.component';
import { UserProfileComponent } from '../components/user-profile-component/user-profile-component.component';

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
  {
    path: "profile/:id",
    component: UserProfileComponent
  },
  {
    path: 'cart/:id',
    component: CartComponent
  }
]

// @NgModule({
//   declarations: [],
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: [
//     MoviesService,
//     UserService,
//     FormsModule,
//     ReactiveFormsModule
//   ]
// })

export const myrouting = RouterModule.forRoot(routes)
