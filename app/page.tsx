import { ConversionRate } from "@/components/ConversionRate";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="px-4">
        <Header />
        <Separator />
        <div className="h-4" />
        <div className="flex flex-col gap-6">
          <CurrencyConverter />
          <ConversionRate />
        </div>
      </main>
    </div>
  );
}
