import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  add(a:number, b:number){
    return a +b;
  }
  divide( a:number, b:number){
    return a/b;
  }
}
