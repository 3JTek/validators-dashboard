import NavBar from "@/ui/navigation/NavBar";

import { ReactNode } from "react";
import Container from "../../ui/layout/Container";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <NavBar />
      <main>{children}</main>
    </Container>
  );
}
