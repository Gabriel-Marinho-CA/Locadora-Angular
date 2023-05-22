import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-component/header-component.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { FooterComponent } from './components/footer-component/footer-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/catalog-component/movie-card/movie-card.component';
import { CatalogComponent } from './components/catalog-component/catalog-component.component';
import { SignupComponent } from './components/signup-component/signup-component.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { myrouting } from './routes/app.routing';
import { CartComponent } from './components/cart-component/cart-component.component';
import { UserProfileComponent } from './components/user-profile-component/user-profile-component.component';
import { MovieCardUserComponent } from './components/user-profile-component/movie-card-component/movie-card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CatalogComponent,
    MovieCardComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    UserProfileComponent,
    MovieCardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    myrouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
