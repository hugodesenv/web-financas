"use client"

import { MdExitToApp, MdOutlineAccountBalanceWallet, MdOutlineAutoGraph, MdOutlineSettings, MdPriceCheck } from 'react-icons/md';
import './style.css';
import { useEffect, useState } from 'react';

const menus = [
  {
    icon: <MdOutlineAccountBalanceWallet fontSize={20} />,
    label: 'Cadastro',
    key: 'mn-add',
    sub_menus: [
      { label: 'Contas fixas' },
      { label: 'Cartões' },
    ],
  },
  {
    icon: <MdPriceCheck fontSize={20} />,
    label: 'Contas a pagar',
    key: 'mn-bills-to-pay',
    sub_menus: [
      { label: 'Digitação' },
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
  },
];

interface ISubMenuStyle {
  [key: string]: boolean;
};

function MenuSidebar() {
  const [subMenusOpened, setSubMenusOpened] = useState({} as ISubMenuStyle);

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
          {submenus?.map((sm: any, idxsm: number) =>
            <li key={`submenu-${idxsm}`} className='submenu'>{sm.label}</li>
          )}
          <div className='divider' />
        </ul>
      );
    }
  }

  return (
    <div className='menu-container' onMouseLeave={handleMenuMouseLeave}>
      <div className='menu'>
        {
          menus.map(({ key, icon, label, sub_menus }) =>
            <ul>
              <li key={key} onClick={(e) => handleClickMenu(e, key)}>
                <div>{icon}</div>
                <span>{label}</span>
              </li>
              <SubMenuList submenus={sub_menus} keyOwnerMenu={key} />
            </ul>
          )
        }
      </div>
      <ul className='menu container-menu-footer'>
        <li>
          <div>
            <MdExitToApp fontSize={20} />
          </div>
          <span>Sair</span>
        </li>
      </ul>
    </div>
  )
}

export default MenuSidebar;