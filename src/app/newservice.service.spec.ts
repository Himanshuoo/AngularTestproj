import { TestBed } from '@angular/core/testing';

import { NewserviceService } from './newservice.service';
import { MyserviceService } from './myservice.service';

describe('NewserviceService', () => {
  // let service: NewserviceService;
TestBed.configureTestingModule({
  providers:[MyserviceService]
})
  it("testing Divide method", ()=> {


   
   // let ob = new NewserviceService();
   let ob = TestBed.inject(MyserviceService);
  try{
    var res = ob.divide(10, 5);{
      expect(res).toBe(2)
    }
  }
  catch{
  
  }
  
  
  
   });
  

});
