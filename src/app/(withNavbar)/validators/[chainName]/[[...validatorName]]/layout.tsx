import { ReactNode } from "react";
import { ValidatorDataProvider } from "./components/useValidatorDataContext";

export default function Layout({ children }: { children: ReactNode }) {
  return <ValidatorDataProvider> {children}</ValidatorDataProvider>;
}
