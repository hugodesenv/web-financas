"use client";

import MyCard from "@/components/card/my-card/MyCardBox";
import MyTotalizationCard from "@/components/card/my-totalization-card/MyTotalizationCard";
import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { useState } from "react";
import PageAccountBalance from "./pages/home/HomeAccountBalance";
import HomeDrawerTotalizations, { ITableData } from "./pages/home/HomeDrawerTotalizations";
import HomeGroupExpenses from "./pages/home/HomeGroupExpenses";
import './pages/home/style.css';

export default function Home() {
  const [drawerTotalization, setDrawerTotalization] = useState({
    data: [] as ITableData[][],
    isOpen: false,
    title: ''
  });

  function _onClickTotalization(event: any, pTitle: string) {
    // fazer o filtro para setar no drawer aqui
    setDrawerTotalization({
      data: [
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi SBO', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Limeira', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
        [{ date: '28/04/2024', description: 'Cobasi Americana', type: 'Agropet', value: 209.44 }],
      ],
      isOpen: true,
      title: pTitle
    }
    )
  }

  function _onCloseTotalization() {
    setDrawerTotalization((prev) => {
      return { ...prev, isOpen: false }
    })
  }

  return (
    <div>
      <MyTopBar title="Home" />
      {/** 
      <input list="browsers" name="browser" />
      <datalist id="browsers">
        <option value="Internet Explorer" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
*/}
      <div className="page-display-gap page-content-body">
        <MyCard title="Totalizadores">
          <div
            className="page-totalization-content">
            <MyTotalizationCard
              title="Ganhos (+)"
              content={1300.33}
              onClick={(e: any) => _onClickTotalization(e, 'Minhas receitas')}
              className='my-color-blue'
            />
            <MyTotalizationCard
              title="Gastos (-)"
              content={1300.33}
              onClick={(e: any) => _onClickTotalization(e, 'Minhas despesas')}
              className='my-color-red'
            />
            <MyTotalizationCard
              title="Saldo (=)"
              content={1300.33}
              className='my-color-gray'
            />
          </div>
        </MyCard>
        <div className="page-display-gap page-wrapper-balance">
          <MyCard title="Total por tipo" className='page-card-bills-by-type'>
            <HomeGroupExpenses />
          </MyCard>
          <MyCard title="Saldo em conta" className='page-card-balance'>
            <PageAccountBalance />
          </MyCard>
        </div>
      </div>
      {/** quando o usuario clica sob o totalizador, abrimos o drawer */}
      <HomeDrawerTotalizations
        data={drawerTotalization.data}
        drawerProps={{
          title: drawerTotalization.title,
          isOpen: drawerTotalization.isOpen,
          onClose: _onCloseTotalization,
        }}
      />
    </div >
  );
}
