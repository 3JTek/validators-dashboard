import NavBar from "@/ui/navigation/navbar/NavBar";

import { ReactNode } from "react";
import Container from "../../ui/layout/Container";
import Menu from "@/ui/menu/Menu";

export default function WithNavBarLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <NavBar />
      <main>
        <Menu />
        {children}
      </main>
    </Container>
  );
}
