import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BugreportsComponent } from './bugreports/bugreports.component';
import { GlobalstylesComponent } from './globalstyles/globalstyles.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'userhome', component: UserhomeComponent},
  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'bugreports', component: BugreportsComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'metrics', component: MetricsComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'globalstyles', component: GlobalstylesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
