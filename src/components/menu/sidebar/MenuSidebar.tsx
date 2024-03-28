"use client"

import { MdExitToApp, MdOutlineAccountBalanceWallet, MdOutlineAutoGraph, MdOutlineSettings, MdPriceCheck } from 'react-icons/md';
import './style.css';
import { useState } from 'react';

const menus = [
  {
    icon: <MdOutlineAccountBalanceWallet fontSize={20} />,
    label: 'Cadastro',
    sub_menus: [
      { label: 'Contas fixas' },
      { label: 'Cartões' },
    ],
  },
  {
    icon: <MdPriceCheck fontSize={20} />,
    label: 'Contas a pagar',
  },
  {
    icon: <MdOutlineAutoGraph fontSize={20} />,
    label: 'Relatório',
  },
  {
    icon: <MdOutlineSettings fontSize={20} />,
    label: 'Configuração',
  },
];

function MenuLateral() {
  const [submenuStyle, setSubmenuStyle] = useState('submenuHidden');

  function handleClickMenu(e: any) {
    e.preventDefault();
    const style = submenuStyle === 'submenuHidden' ? 'submenuShow' : 'submenuHidden';
    setSubmenuStyle(style);
  }

  function handleMenuMouseLeave(e: any) {
    e.preventDefault();
    setSubmenuStyle('submenuHidden');
  }

  return (
    <div className='menu-container' onMouseLeave={handleMenuMouseLeave}>
      <div className='menu'>
        {
          menus.map((el, idx) =>
            <ul>
              <li key={`mn-${idx}`} onClick={handleClickMenu}>
                <div>
                  {el.icon}
                </div>
                <span>{el.label}</span>
              </li>
              {
                el?.sub_menus?.map((sm, idxSm) => (
                  <li
                    className={`submenu ${submenuStyle}`}
                    key={`mn-sm-${idx}-${idxSm}`}
                  >
                    {sm.label}
                  </li>
                ))
              }
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

export default MenuLateral;