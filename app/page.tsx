import { CurrencyConverter } from "@/components/CurrencyConverter";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="px-4">
      <ThemeToggle />
      <CurrencyConverter />
    </main>
  );
}
