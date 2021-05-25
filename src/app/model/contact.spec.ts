import { Contact } from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact("test1", "test2", "test3")).toBeTruthy();
  });
});
