"use client";

import MyButton from "@/components/button/myButton/MyButton";
import MyCard from "@/components/card/my-card/MyCardBox";
import MyTotalizationCard from "@/components/card/my-totalization-card/MyTotalizationCard";
import MyLayout from "@/components/layout/MyLayout";
import MyTopBar from "@/components/menu/topBar/MyTopBar";
import MyInputText from "@/components/text/MyInputText";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import HomeAccountBalance from "./components/HomeAccountBalance";
import HomeDrawerTotalizations, { ITableData } from "./components/HomeDrawerTotalizations";
import HomeGroupExpenses from "./components/HomeGroupExpenses";
import "./style.css";

export default function Home() {
  const [drawerTotalization, setDrawerTotalization] = useState({
    data: [] as ITableData[][],
    isOpen: false,
    title: "",
  });

  function _onClickTotalization(event: any, pTitle: string) {
    // fazer o filtro para setar no drawer aqui
    setDrawerTotalization({
      data: [
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi SBO",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Limeira",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
        [
          {
            date: "28/04/2024",
            description: "Cobasi Americana",
            type: "Agropet",
            value: 209.44,
          },
        ],
      ],
      isOpen: true,
      title: pTitle,
    });
  }

  function _onCloseTotalization() {
    setDrawerTotalization((prev) => {
      return { ...prev, isOpen: false };
    });
  }

  return (
    <MyLayout>
      <MyTopBar title="Home">
        <MyInputText title="" type="date" />
        <MyButton
          theme="dark"
          onClick={() => { }}
          style={{ minWidth: "min-content" }}
        >
          <MdOutlineSearch />
        </MyButton>
      </MyTopBar>
      <div className="page-display-gap page-content-body">
        <MyCard title={{ caption: "Totalizadores" }}>
          <div className="page-totalization-content">
            <MyTotalizationCard
              title="Ganhos (+)"
              content={1300.33}
              onClick={(e: any) => _onClickTotalization(e, "Minhas receitas")}
              className="my-color-blue"
            />
            <MyTotalizationCard
              title="Gastos (-)"
              content={1300.33}
              onClick={(e: any) => _onClickTotalization(e, "Minhas despesas")}
              className="my-color-red"
            />
            <MyTotalizationCard
              title="Saldo (=)"
              content={1300.33}
              className="my-color-gray"
            />
          </div>
        </MyCard>
        <MyCard title={{ caption: "Estatísticas" }}>

        </MyCard>
        <div className="page-display-gap page-wrapper-balance">
          <div className="page-card-bills-by-type">
            <MyCard title={{ caption: "Total por tipo" }}>
              <HomeGroupExpenses />
            </MyCard>
          </div>
          <div className="page-card-balance">
            <HomeAccountBalance />
          </div>
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
    </MyLayout>
  );
}
