import LayoutRegister from "@/components/utils/layout/layout_register";
import { Metadata } from "next";
import FixedReleaseFormRegister from "./components/FixedReleaseFormRegister";
import { CSSProperties } from "react";
import MyCard from "@/components/utils/card/MyCard";

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