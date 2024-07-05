import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className="m-10">{children}</main>
      <Footer />
    </>
  );
}
