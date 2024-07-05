"use client";

import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const CurrencyConverter = () => {
  const [result, setResult] = useState<undefined | number>(undefined);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleConvertClick = () => {
    if (!inputRef.current) {
      return;
    }

    if (isNaN(parseInt(inputRef.current?.value))) {
      return;
    }

    const rate = 0.13;

    setResult(parseInt(inputRef.current.value) * rate);
  };

  return (
    <>
      <Input type="number" placeholder="DKK" ref={inputRef} />
      <Button onClick={handleConvertClick}>convert</Button>
      <div>{result} Eur</div>
    </>
  );
};
