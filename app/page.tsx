import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Input />
    </main>
  );
}
