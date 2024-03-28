import MenuSidebar from "@/components/menu/sidebar/MenuSidebar";

export default function Home() {
  const style = {
    container: {
      backgroundColor: '#F6F6F6',
      display: 'flex',
      height: '100%',
    },
    corpo: {
      paddingLeft: '50px',
    },
  };

  return (
    <main style={style.container}>
      <MenuSidebar />
      <div style={style.corpo}>
        Body da page.tsx
      </div>
    </main>
  );
}
