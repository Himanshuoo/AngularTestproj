import { TestpipePipe } from './testpipe.pipe';

describe('TestpipePipe', () => {
  it('create an instance', () => {
    const pipe = new TestpipePipe();
    expect(pipe).toBeTruthy();
  });




  
  it('test custom pipe', () => {
    const value = 10
    const pipe = new TestpipePipe();
    const result = pipe.transform(value);
    expect(result).toBe(5);
  });
});
