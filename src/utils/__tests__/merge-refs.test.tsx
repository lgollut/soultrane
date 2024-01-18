import { render } from '@testing-library/react';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { vi } from 'vitest';

import { mergeRefs } from '../merge-refs';

describe('mergeRefs', () => {
  it('should apply multiple refs to the same provided element', () => {
    let ref1Spy: HTMLElement | null = null;
    let ref2Spy: HTMLElement | null = null;

    function App() {
      const ref1 = useRef<HTMLDivElement>(null);
      const ref2 = useRef<HTMLDivElement>(null);

      useLayoutEffect(() => {
        ref1Spy = ref1.current;
        ref2Spy = ref2.current;
      });

      return <div id="test" ref={mergeRefs([ref1, ref2])} />;
    }

    render(<App />);

    // @ts-expect-error - ref1Spy is not null
    expect(ref1Spy?.id).toBe('test');
    // @ts-expect-error - ref2Spy is not null
    expect(ref2Spy?.id).toBe('test');
  });

  it('should apply multiple callback refs to the same provided element', () => {
    const callbackSpy1 = vi.fn();
    const callbackSpy2 = vi.fn();

    function App() {
      const ref1 = useCallback(callbackSpy1, []);
      const ref2 = useCallback(callbackSpy2, []);

      return <div id="test" ref={mergeRefs([ref1, ref2])} />;
    }

    render(<App />);

    expect(callbackSpy1.mock.calls[0][0]?.id).toBe('test');
    expect(callbackSpy2.mock.calls[0][0]?.id).toBe('test');
  });

  it('should apply multiple refs or callback refs to the same provided element', () => {
    const callbackSpy = vi.fn();
    let refSpy: HTMLElement | null = null;

    function App() {
      const ref1 = useRef<HTMLDivElement>(null);
      const ref2 = useCallback(callbackSpy, []);

      useLayoutEffect(() => {
        refSpy = ref1.current;
      });

      return <div id="test" ref={mergeRefs([ref1, ref2])} />;
    }

    render(<App />);

    // @ts-expect-error - refSpy is not null
    expect(refSpy?.id).toBe('test');
    expect(callbackSpy.mock.calls[0][0]?.id).toBe('test');
  });

  it('should ignore invalid values', () => {
    const callbackSpy = vi.fn();
    let refSpy: HTMLElement | null = null;

    function App() {
      const ref1 = useRef<HTMLDivElement>(null);
      const ref2 = useCallback(callbackSpy, []);

      useLayoutEffect(() => {
        refSpy = ref1.current;
      });

      return <div id="test" ref={mergeRefs([ref1, ref2, null, undefined])} />;
    }

    render(<App />);

    // @ts-expect-error - refSpy is not null
    expect(refSpy?.id).toBe('test');
    expect(callbackSpy.mock.calls[0][0]?.id).toBe('test');
  });

  it('should ignore null elements', () => {
    const callbackSpy = vi.fn();
    let refSpy: HTMLElement | null = null;

    function App() {
      const ref1 = useRef<HTMLDivElement>(null);
      const ref2 = useCallback(callbackSpy, []);

      useLayoutEffect(() => {
        refSpy = ref1.current;
      });

      useLayoutEffect(() => {
        mergeRefs([ref1, ref2])(null);
      });

      return null;
    }

    render(<App />);

    expect(refSpy).toBe(null);
    expect(callbackSpy).not.toHaveBeenCalled();
  });
});
