import { vi } from 'vitest';

import { extractSprinklesProps } from '../extract-sprinkles-props';

vi.mock('sprinkles.css', () => ({
  sprinkles: {
    properties: new Set([
      'display',
      'padding',
      'tintScheme',
      'backgroundColor',
    ]),
  },
}));

describe('extractSprinklesProps', () => {
  it('should extract props from a given object', () => {
    const input = {
      display: 'block',
      padding: 'xs',
      tintScheme: 'surface',
      backgroundColor: 'surface',
      children: 'Hello world',
      isActive: true,
    };

    const expectedOutput = [
      {
        display: 'block',
        padding: 'xs',
        tintScheme: 'surface',
        backgroundColor: 'surface',
      },
      {
        children: 'Hello world',
        isActive: true,
      },
    ];

    const result = extractSprinklesProps(input);

    expect(result).toEqual(expectedOutput);
  });
});
