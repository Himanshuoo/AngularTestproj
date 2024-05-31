import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }

  divide( a:number, b:number){
    return a/b;
  }
}
