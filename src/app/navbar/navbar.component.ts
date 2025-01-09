import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})




export class NavbarComponent {
  public menuMobile:boolean = false;
  private isMobile:boolean = false;

  public toggleMobileMenu(){
    this.menuMobile = !this.menuMobile;
    const mobileMenuIcon = document.querySelector("#mobileMenuIcon");


    if (this.menuMobile && mobileMenuIcon){
      mobileMenuIcon.innerHTML = "close";
      document.getElementsByTagName("body")[0].classList.add("overlay");
    } else if (mobileMenuIcon){
      mobileMenuIcon.innerHTML = "menu";
      document.getElementsByTagName("body")[0].classList.remove("overlay");

    }
  }
  public switchUrl(){
    this.menuMobile = !this.menuMobile;
    document.getElementsByTagName("body")[0].classList.remove("overlay");

    const mobileMenuIcon = document.querySelector("#mobileMenuIcon");
    if(mobileMenuIcon){
      mobileMenuIcon.innerHTML = "menu";
    }
  }
}
