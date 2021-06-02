import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BugreportsComponent } from './bugreports/bugreports.component';
import { GlobalstylesComponent } from './globalstyles/globalstyles.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthgaurdService } from './services/bugservice/authgaurd.service';
import { UserhomeComponent } from './userhome/userhome.component';


export const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'userhome', component: UserhomeComponent, canActivate: [AuthgaurdService]},
  {path: 'adminhome', component: AdminhomeComponent,canActivate: [AuthgaurdService]},
  {path: 'profile', component: ProfileComponent},
  {path: 'bugreports', component: BugreportsComponent},
 // {path: 'bugreports', component: BugreportsComponent, canActivate: [ AuthgaurdService] },
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'metrics', component: MetricsComponent},
  {path: 'globalstyles', component: GlobalstylesComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
