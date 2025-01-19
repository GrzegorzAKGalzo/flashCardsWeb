import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public year:number = 2055;


  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
