import NavBar from "@/ui/navigation/navbar/NavBar";

import { ReactNode } from "react";
import Container from "../../ui/layout/Container";
import MainMenu from "./components/MainMenu";

export default function WithNavBarLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <NavBar />
      <main>
        <MainMenu />
        {children}
      </main>
    </Container>
  );
}
