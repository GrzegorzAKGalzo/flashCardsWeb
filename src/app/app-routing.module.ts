import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterInComponent } from './register-in/register-in.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MyFlashSetsComponent } from './my-flash-sets/my-flash-sets.component';
import { CreateFlashSetComponent } from './create-flash-set/create-flash-set.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterInComponent},
  {path: 'profile', component: ProfileDetailsComponent},
  {path: 'my-sets', component: MyFlashSetsComponent},
  {path: 'create-flash-set', component: CreateFlashSetComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
