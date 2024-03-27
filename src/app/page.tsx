import MenuLateral from "@/components/menu/menu_lateral/MenuLateral";

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
      <MenuLateral />
      <div style={style.corpo}>
        Body da page.tsx
      </div>
    </main>
  );
}
