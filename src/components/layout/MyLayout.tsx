import { CSSProperties } from "react";
import PageMenu from "../utils/MyPageMenu";

const style = {
  main: {
    backgroundColor: "#F5F5F5",
    display: "flex",
    height: "100%",
  } as CSSProperties,
  container: {
    width: "calc(100% - 42px)",
    marginLeft: "42px",
    height: "100%",
  } as CSSProperties,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <PageMenu />
      <section style={style.container}>{children}</section>
    </main>
  );
}
