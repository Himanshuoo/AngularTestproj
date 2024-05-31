import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';
import { catchError } from 'rxjs';

describe('MyserviceService', () => {
 it("testing add method", ()=> {

let ob = new MyserviceService();
var result = ob.add(10,20);
expect(result).toBe(30)

 });

//  it("testing multiply method", ()=> {



//  });
 xit("testing Divide method", ()=> {
  let ob = new MyserviceService();
try{
  var res = ob.divide(10, 5);{
    expect(res).toBe(2)
  }
}
catch{

}



 });



});
