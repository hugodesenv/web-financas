"use client";

import MyDrawer from "@/components/drawer/MyDrawer";
import MyMenuSidebar, {
  IMenuStructure,
} from "@/components/menu/sidebar/MyMenuSidebar";
import { MyTabView } from "@/components/tabview/MyTabView";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineAutoGraph,
  MdOutlineEvent,
  MdOutlineHome,
  MdOutlineNoteAlt,
  MdOutlineReceiptLong,
  MdOutlineSettings
} from "react-icons/md";

function PageMenu() {
  const [openSettings, setOpenSettings] = useState(false);
  const router = useRouter();

  const menus: IMenuStructure[] = [
    {
      icon: <MdOutlineHome fontSize={20} />,
      label: "Home",
      key: "mn-home",
      onClick: () => router.push("/"),
    },
    {
      icon: <MdOutlineEvent fontSize={20} />,
      label: "Agenda",
      key: "mn-schedule",
      onClick: () => router.push("/pages/screen/schedule/"),
    },
    {
      icon: <MdOutlineAccountBalanceWallet fontSize={20} />,
      label: "Cadastro",
      key: "mn-add",
      sub_menus: [
        {
          key: "fixed-release",
          label: "Lançamentos fixos",
          onClick: () => {
            router.push("/pages/screen/register/fixed-release/");
          },
        },
        {
          key: "person",
          label: "Pessoas",
          onClick: () => router.push("/pages/screen/register/person"),
        },
        {
          key: "type-entry",
          label: "Tipo",
          onClick: () => {
            router.push("/pages/screen/register/type");
          },
        },
      ],
    },
    {
      icon: <MdOutlineReceiptLong fontSize={20} />,
      label: "Contas a pagar",
      key: "mn-bills-to-pay",
      sub_menus: [
        {
          key: "mn-entry",
          label: "Digitação",
          onClick: () => router.push("/pages/screen/register/bills-to-pay"),
        },
      ],
    },
    {
      icon: <MdOutlineNoteAlt fontSize={20} />,
      label: "Contas a receber",
      key: 'mn-bills-to-receive',
      sub_menus: [
        {
          key: 'mn-entry-bills-receive',
          label: 'Digitação',
          onClick: () => router.push('/pages/screen/register/bills-to-receive'),
        }
      ]
    },
    {
      icon: <MdOutlineAutoGraph fontSize={20} />,
      label: "Relatório",
      key: "mn-report",
    },
    {
      icon: <MdOutlineSettings fontSize={20} />,
      label: "Configuração",
      key: "mn-setting",
      onClick: () => setOpenSettings(true),
    },
  ];

  return (
    <div>
      <MyMenuSidebar child={menus} />
      <MyDrawer
        title="Configurações"
        isOpen={openSettings}
        onClose={() => setOpenSettings(false)}
      >
        <MyTabView
          titles={[{ caption: "Teste 1" }, { caption: "Teste 2" }]}
          children={[<>Batatera</>, <>Cenorera</>]}
        />
      </MyDrawer>
    </div>
  );
}

export default PageMenu;
