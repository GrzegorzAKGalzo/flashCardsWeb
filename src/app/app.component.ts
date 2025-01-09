import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flashCardsWeb';
  public overlayActive:boolean = false;
  constructor(private router: Router) {}
  private body = document.getElementsByTagName('body')[0];

}
