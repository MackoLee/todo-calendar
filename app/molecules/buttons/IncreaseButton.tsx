'use client';

import { useRecoilState } from 'recoil';
import { counterAtom } from '@/recoil/atoms/counter-atom';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

export const IncreaseButton: FC = function IncreaseButton() {
  const [, setCount] = useRecoilState(counterAtom);
  function increment() {
    setCount((c) => c + 1);
  }
  return (
    <Button
      className="bg-primary"
      onClick={() => increment()}
    >
      Increment
    </Button>
  );
};