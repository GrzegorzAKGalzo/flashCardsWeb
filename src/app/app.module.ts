import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashSetComponent } from './flash-set/flash-set.component';
import { MyFlashSetsComponent } from './my-flash-sets/my-flash-sets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterInComponent } from './register-in/register-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateFlashSetComponent } from './create-flash-set/create-flash-set.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    FlashSetComponent,
    MyFlashSetsComponent,
    NavbarComponent,
    RegisterInComponent,
    LogInComponent,
    CreateFlashSetComponent,
    ProfileDetailsComponent,
    HomePageComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
