import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
import { SearchComponentComponent } from './search-component/search-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search/:searched',
    component: SearchComponentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/setting',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:username',
    component: FriendProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
