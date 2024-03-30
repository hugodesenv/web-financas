"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdExitToApp, MdKeyboardArrowDown, MdKeyboardControlKey, MdOutlineAccountBalanceWallet, MdOutlineAutoGraph, MdOutlineSettings, MdPriceCheck } from 'react-icons/md';
import './style.css';
import Link from 'next/link';

interface ISubMenuStyle {
  [key: string]: boolean;
};

function MenuSidebar() {
  const [subMenusOpened, setSubMenusOpened] = useState({} as ISubMenuStyle);
  const router = useRouter();

  const menus = [
    {
      icon: <MdOutlineAccountBalanceWallet fontSize={20} />,
      label: 'Cadastro',
      key: 'mn-add',
      sub_menus: [
        {
          key: 'fixed-account',
          label: 'Contas fixas',
          onClick: () => {
            router.push('/pages/card');
          },
        },
        {
          key: 'mn-card',
          label: 'Cartões',
          onClick: () => {
            console.log('cliquei auqui nos cartões');
          },
        },
      ],
    },
    {
      icon: <MdPriceCheck fontSize={20} />,
      label: 'Contas a pagar',
      key: 'mn-bills-to-pay',
      sub_menus: [
        { key: 'mn-entry', label: 'Digitação' },
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
      onClick: () => {
        console.log('cliquei nas configurações');
      },
    },
  ];

  function handleClickMenu(event: any, ownerMenuSelected: string) {
    event.preventDefault();
    setSubMenusOpened(prevState => ({
      ...prevState,
      [ownerMenuSelected]: !prevState[ownerMenuSelected],
    }));
  }

  function handleMenuMouseLeave() {
    setSubMenusOpened({});
  }

  function SubMenuList({ submenus, keyOwnerMenu }: any) {
    if (subMenusOpened[keyOwnerMenu]) {
      return (
        <ul>
          {
            submenus?.map((sm: any) =>
              <li key={sm.key} className='submenu' onClick={() => sm?.onClick?.()}>
                <span>{sm.label}</span>
              </li>
            )
          }
          <div className='divider' />
        </ul>
      );
    }
  };

  function GetSufixIcon(props: {
    hasSubMenus: boolean,
    keyOwnerMenu: string,
  }) {
    if (props.hasSubMenus) {
      return subMenusOpened[props.keyOwnerMenu]
        ? <MdKeyboardControlKey fontSize={14} />
        : <MdKeyboardArrowDown fontSize={14} />
    }
  }

  return (
    <div className='menu-container' onMouseLeave={handleMenuMouseLeave}>
      <div className='menu'>
        {
          menus.map(({ key, icon, label, sub_menus, onClick }) => {
            const hasSubMenus = (sub_menus?.length || 0) > 0;
            const onClickMenu = (e: any) => hasSubMenus ? handleClickMenu(e, key) : onClick?.();

            return (
              <ul>
                <li key={key} onClick={onClickMenu}>
                  <div>{icon}</div>
                  <div className='container-label'>
                    <span>{label}</span>
                    <GetSufixIcon
                      keyOwnerMenu={key}
                      hasSubMenus={hasSubMenus}
                    />
                  </div>
                </li>
                <SubMenuList
                  submenus={sub_menus}
                  keyOwnerMenu={key}
                />
              </ul>
            )
          })
        }
      </div>
      <ul className='menu container-menu-footer'>
        <li key={'mn-logout'}>
          <div>
            <Link href={'card'}>
              <button>teste</button>
            </Link>
            <MdExitToApp fontSize={20} />
          </div>
          <span>Sair</span>
        </li>
      </ul>
    </div>
  )
}

export default MenuSidebar;