import { SwColorPipe } from './sw-color.pipe';

describe('SwColorPipe', () => {
  it('create an instance', () => {
    const pipe = new SwColorPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns correct color', () => {
    const pipe = new SwColorPipe();
    expect(pipe.transform('blue-gray')).toContain('#4d4d6b');
  });

  it('returns transparent if n/a provided', () => {
    const pipe = new SwColorPipe();
    expect(pipe.transform('n/a')).toContain('transparent');
  });

  it('returns transparent if null or undefined provided', () => {
    const pipe = new SwColorPipe();
    expect(pipe.transform(null, undefined)).toContain('transparent');
  });
});
