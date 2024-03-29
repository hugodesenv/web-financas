import MenuSidebar from "@/components/menu/sidebar/MenuSidebar";
import TopBar from "@/components/menu/topBar/TopBar";
import { CSSProperties } from "react";
import { loremIpsum } from "lorem-ipsum";

export default function Home() {
  const style = {
    main: {
      backgroundColor: '#F5F5F5',
      display: 'flex',
      height: '100%',
    } as CSSProperties,
    container: {
      width: 'calc(100% - 42px)',
      marginLeft: '42px',
      height: '100%',
    } as CSSProperties,
  };

  return (
    <main style={style.main}>
      <MenuSidebar />
      <div style={style.container}>
        <TopBar />
        <div>
          Hugo {loremIpsum({ count: 90 })}
        </div>
      </div>
    </main>
  );
}
