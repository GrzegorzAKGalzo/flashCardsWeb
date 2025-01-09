import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  public isLogged:boolean = false;

  constructor() { }


}
