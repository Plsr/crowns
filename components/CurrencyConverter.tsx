"use client";

import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const CurrencyConverter = () => {
  const [result, setResult] = useState<undefined | number>(undefined);
  const dkkInputRef = useRef<HTMLInputElement | null>(null);
  const eurInputRef = useRef<HTMLInputElement | null>(null);

  const handleConvertClick = () => {
    if (!dkkInputRef.current) {
      return;
    }

    if (isNaN(parseInt(dkkInputRef.current?.value))) {
      return;
    }

    const rate = 0.13;

    setResult(parseInt(dkkInputRef.current.value) * rate);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Convert DKK 🇩🇰</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Input type="number" placeholder="DKK" ref={dkkInputRef} />
            <Button variant="secondary" disabled>
              {result} €
            </Button>
          </div>
          <Button className="w-full mt-6" onClick={handleConvertClick}>
            convert
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
