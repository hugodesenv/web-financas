import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { Metadata } from "next";
import FixedReleaseFormRegister from "./components/FixedReleaseFormRegister";

export const metadata: Metadata = {
  title: 'Skedol Lançamentos Fixos',
  description: 'Skedol - Controle suas dívidas',
};

export default function FixedRelease() {
  return (
    <MyTopBar title='Lançamentos fixos'>
      <FixedReleaseFormRegister />
    </MyTopBar>
  )
}