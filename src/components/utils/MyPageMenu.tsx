"use client";

import MyDrawer from "@/components/drawer/MyDrawer";
import MyMenuSidebar, {
  IMenuStructure,
} from "@/components/menu/sidebar/MyMenuSidebar";
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
import MyTabView from "../table/tabview/MyTabView";

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
      onClick: () => router.push("/pages/maintenance/schedule/"),
    },
    {
      icon: <MdOutlineAccountBalanceWallet fontSize={20} />,
      label: "Cadastro",
      key: "mn-add",
      sub_menus: [
        {
          key: "category",
          label: "Categoria",
          onClick: () => {
            router.push("/pages/maintenance/category");
          },
        },
        {
          key: "fixed-release",
          label: "Lançamentos fixos",
          onClick: () => {
            router.push("/pages/maintenance/fixed-release/");
          },
        },
        {
          key: "person",
          label: "Pessoas",
          onClick: () => router.push("/pages/maintenance/person"),
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
          onClick: () => router.push("/pages/maintenance/bills-to-pay"),
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
          onClick: () => router.push('/pages/maintenance/bills-to-receive'),
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
    <>
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
    </>
  );
}

export default PageMenu;
