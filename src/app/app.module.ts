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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePictureComponent } from './profile/profile-picture/profile-picture.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileSolutionsComponent } from './profile/profile-solutions/profile-solutions.component';
import { RegistrationComponent } from './registration/registration.component';


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
    FooterComponent,
    ProfilePictureComponent,
    ProfileSolutionsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
