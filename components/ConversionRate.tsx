import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BanknotesIcon } from "@heroicons/react/16/solid";

const rate = 0.13;

export const ConversionRate = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-4">
            <BanknotesIcon className="h-6 w-6" />
            <span>Conversion Rate</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>1 DKK = {rate} €</div>
        <div className="text-sm">Roughly {Math.ceil(1 / 0.13)} kr. are 1 €</div>
        <div className="text-xs dark:text-neutral-500 text-neutral-400 mt-2">
          Last update: Static
        </div>
      </CardContent>
    </Card>
  );
};
