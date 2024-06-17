import NavBar from "@/ui/navigation/NavBar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="flex min-h-screen flex-col items-stretch">
        <>{children}</>
      </main>
    </>
  );
}
