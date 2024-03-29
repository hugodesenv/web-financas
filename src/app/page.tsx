import MenuSidebar from "@/components/menu/sidebar/MenuSidebar";
import TopBar from "@/components/menu/topBar/TopBar";

export default function Home() {
  const style = {
    container: {
      backgroundColor: '#F5F5F5',
      display: 'flex',
      height: '100%',
    },
    corpo: {
      width: 'calc(100% - 42px)',
      marginLeft: '42px',
      height: '100%',
    },
  };

  return (
    <main style={style.container}>
      <MenuSidebar />
      <div style={style.corpo}>
        <TopBar />
      </div>
    </main>
  );
}
