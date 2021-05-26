import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MetricsComponent } from './metrics/metrics.component';
import { BugreportsComponent } from './bugreports/bugreports.component';
import { UsernavComponent } from './usernav/usernav.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { GlobalstylesComponent } from './globalstyles/globalstyles.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    AdminhomeComponent,
    ProfileComponent,
    LeaderboardComponent,
    MetricsComponent,
    BugreportsComponent,
    UsernavComponent,
    AdminnavComponent,
    GlobalstylesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
