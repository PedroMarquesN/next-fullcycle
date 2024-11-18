import { describe, it } from 'node:test';
import { expect } from '@jest/globals';
import { useScroll } from '../../src/app/hooks/useScroll';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react';

describe('useScroll', () => {
  it('should return a boolean', () => {
    const { result } = renderHook(() => useScroll());
    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);
  });
});
