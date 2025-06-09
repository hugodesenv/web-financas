'use client';

import MyDrawer from '@/components/drawer/MyDrawer';
import MyMenuSidebar, { IMenuStructure } from '@/components/menu/sidebar/MyMenuSidebar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineAutoGraph,
  MdOutlineEvent,
  MdOutlineHome,
  MdOutlineReceiptLong,
  MdOutlineSettings,
} from 'react-icons/md';
import MyTabView from '../table/tabview/MyTabView';

function PageMenu() {
  const [openSettings, setOpenSettings] = useState(false);
  const router = useRouter();

  const menus: IMenuStructure[] = [
    {
      icon: <MdOutlineHome fontSize={20} />,
      label: 'Home',
      key: 'mn-home',
      onClick: () => router.push('/pages/home/'),
    },
    {
      icon: <MdOutlineEvent fontSize={20} />,
      label: 'Agenda',
      key: 'mn-schedule',
      onClick: () => router.push('/pages/maintenance/schedule/'),
    },
    {
      icon: <MdOutlineAccountBalanceWallet fontSize={20} />,
      label: 'Cadastro',
      key: 'mn-add',
      sub_menus: [
        {
          key: '´purpose',
          label: 'Finalidades',
          onClick: () => {
            router.push('/pages/maintenance/purpose');
          },
        },
        {
          key: 'person',
          label: 'Pessoas',
          onClick: () => router.push('/pages/maintenance/person'),
        },
      ],
    },
    {
      icon: <MdOutlineReceiptLong fontSize={20} />,
      label: 'Lançamento',
      key: 'mn-entry',
      sub_menus: [
        {
          key: 'mn-entry-digitation',
          label: 'Digitação',
          onClick: () => router.push('/pages/maintenance/entry'),
        },
      ],
    },
    {
      icon: <MdOutlineAutoGraph fontSize={20} />,
      label: 'Relatório',
      key: 'mn-report',
    },
    {
      icon: <MdOutlineSettings fontSize={20} />,
      label: 'Configuração',
      key: 'mn-setting',
      onClick: () => setOpenSettings(true),
    },
  ];

  return (
    <>
      <MyMenuSidebar child={menus} />
      <MyDrawer title="Configurações" isOpen={openSettings} onClose={() => setOpenSettings(false)}>
        <MyTabView titles={[{ caption: 'Teste 1' }, { caption: 'Teste 2' }]} children={[/** pass the components here | Hugo */]} />
      </MyDrawer>
    </>
  );
}

export default PageMenu;
