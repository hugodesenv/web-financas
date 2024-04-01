import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { Metadata } from "next";
import FixedReleaseFormRegister from "./components/FixedReleaseFormRegister";
import LayoutRegister from "@/components/utils/layout/layout_register";

export const metadata: Metadata = {
  title: 'Skedol Lançamentos Fixos',
  description: 'Skedol - Controle suas dívidas',
};

export default function FixedRelease() {
  return (
    <LayoutRegister title="Lançamentos fixos">
      <FixedReleaseFormRegister />
    </LayoutRegister>
  )
}