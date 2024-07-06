import { ConversionRate } from "@/components/ConversionRate";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="px-4">
      <ThemeToggle />
      <div className="flex flex-col gap-6">
        <CurrencyConverter />
        <ConversionRate />
      </div>
    </main>
  );
}
