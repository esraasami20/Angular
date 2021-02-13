import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/auth.service';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
import { SearchComponentComponent } from './search-component/search-component.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    BlogComponent,
    ProfileComponent,
    SettingsComponent,
    FriendProfileComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule, ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    })

  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginService,
    RegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
