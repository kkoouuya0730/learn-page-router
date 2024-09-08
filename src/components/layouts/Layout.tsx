import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="bg-amber-50">
        <Header />
        <main className="mx-10 my-5">{children}</main>
        <Footer />
      </div>
    </>
  );
}
