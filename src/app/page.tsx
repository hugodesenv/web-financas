"use client";

import MyCard from "@/components/card/my-card/MyCardBox";
import MyTotalizationCard from "@/components/card/my-totalization-card/MyTotalizationCard";
import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { CSSProperties } from "react";
import PageAccountBalance from "./PageAccountBalance";

const staticStyle = {
  bodyContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px'
  } as CSSProperties,
  totalizationContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    flexWrap: 'wrap'
  } as CSSProperties,
}

export default function Home() {
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
      <div style={staticStyle.bodyContent}>
        <MyCard title="Totalizadores">
          <div style={staticStyle.totalizationContent}>
            <MyTotalizationCard
              title="Receitas (+)"
              content={1300.33}
              onClick={() => console.log('clicamos em receita')}
              style={{
                fontColor: '#00198A',
              }}
            />
            <MyTotalizationCard
              title="Despesas (-)"
              content={1300.33}
              onClick={() => console.log('clicamos em despesa')}
              style={{
                fontColor: '#FC003F',
              }}
            />
            <MyTotalizationCard
              title="Diferença (=)"
              content={1300.33}
              style={{
                fontColor: '#424242',
              }}
            />
          </div>
        </MyCard>
        <MyCard title="Saldo em conta">
          <PageAccountBalance />
        </MyCard>
      </div>
    </div>
  );
}
