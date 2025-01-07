import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlashSetComponent } from './flash-set/flash-set.component';
import { MyFlashSetsComponent } from './my-flash-sets/my-flash-sets.component';
import { CreateFlashSetComponent } from './create-flash-set/create-flash-set.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterInComponent } from './register-in/register-in.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashSetComponent,
    MyFlashSetsComponent,
    CreateFlashSetComponent,
    ProfileDetailsComponent,
    LogInComponent,
    RegisterInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
