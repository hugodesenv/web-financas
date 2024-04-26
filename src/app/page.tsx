"use client";

import MyCard from "@/components/card/my-card/MyCardBox";
import MyTotalizationCard from "@/components/card/my-totalization-card/MyTotalizationCard";
import MyTopBar from "@/components/menu/topBar/MyTopBar";
import PageAccountBalance from "./pages/home/HomeAccountBalance";
import './pages/home/style.css';
import HomeGroupExpenses from "./pages/home/HomeGroupExpenses";

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
      <div className="page-display-gap page-content-body">
        <MyCard title="Totalizadores">
          <div className="page-totalization-content">
            <MyTotalizationCard
              title="Ganhos (+)"
              content={1300.33}
              onClick={() => console.log('clicamos em receita')}
              className='my-color-blue'
            />
            <MyTotalizationCard
              title="Gastos (-)"
              content={1300.33}
              onClick={() => console.log('clicamos em despesa')}
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
    </div >
  );
}
