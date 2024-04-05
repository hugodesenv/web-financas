import MyCard from "@/components/card/MyCard";
import LayoutRegister from "@/components/layout/layout_register";
import { Metadata } from "next";
import FixedReleaseFormRegister from "./components/FixedReleaseFormRegister";

export const metadata: Metadata = {
  title: 'Skedol Lançamentos Fixos',
  description: 'Skedol - Controle suas dívidas',
};

export default function FixedRelease() {
  return (
    <LayoutRegister title="Lançamentos fixos">
      <MyCard>
        <FixedReleaseFormRegister />
      </MyCard>
    </LayoutRegister>
  )
}