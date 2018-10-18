import { NytModule } from './nyt.module';

describe('NytModule', () => {
  let nytModule: NytModule;

  beforeEach(() => {
    nytModule = new NytModule();
  });

  it('should create an instance', () => {
    expect(nytModule).toBeTruthy();
  });
});
