"use client";

import { useState } from "react";
import {
  MdExitToApp,
  MdKeyboardArrowDown,
  MdKeyboardControlKey,
} from "react-icons/md";
import "./style.css";

interface ISubMenuStyle {
  [key: string]: boolean;
}

export interface IMenuStructure {
  icon?: any;
  label: string;
  key: string;
  onClick?: any;
  sub_menus?: IMenuStructure[];
}

function MyMenuSidebar(props: { child: IMenuStructure[] }) {
  const [subMenusOpened, setSubMenusOpened] = useState({} as ISubMenuStyle);

  function handleClickMenu(event: any, ownerMenuSelected: string) {
    event.preventDefault();
    setSubMenusOpened((prevState) => ({
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
          {submenus?.map((sm: any) => (
            <li
              key={sm.key}
              className="submenu"
              onClick={() => sm?.onClick?.()}
            >
              <span>{sm.label}</span>
            </li>
          ))}
        </ul>
      );
    }
  }

  function GetSufixIcon(props: { hasSubMenus: boolean; keyOwnerMenu: string }) {
    if (props.hasSubMenus) {
      return subMenusOpened[props.keyOwnerMenu] ? (
        <MdKeyboardControlKey fontSize={14} />
      ) : (
        <MdKeyboardArrowDown fontSize={14} />
      );
    }
  }

  return (
    <div className="menu-container" onMouseLeave={handleMenuMouseLeave}>
      <div className="menu">
        {props.child.map(({ key, icon, label, sub_menus, onClick }) => {
          const hasSubMenus = (sub_menus?.length || 0) > 0;
          const onClickMenu = (e: any) =>
            hasSubMenus ? handleClickMenu(e, key) : onClick?.();
          return (
            <ul>
              <li key={key} onClick={onClickMenu}>
                <div>{icon}</div>
                <div className="container-label">
                  <span>{label}</span>
                  <GetSufixIcon keyOwnerMenu={key} hasSubMenus={hasSubMenus} />
                </div>
              </li>
              <SubMenuList submenus={sub_menus} keyOwnerMenu={key} />
            </ul>
          );
        })}
      </div>
      <ul className="menu container-menu-footer">
        <li key={"mn-logout"}>
          <div>
            <MdExitToApp fontSize={20} />
          </div>
          <span>Sair</span>
        </li>
      </ul>
    </div>
  );
}

export default MyMenuSidebar;
