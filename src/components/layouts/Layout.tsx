import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-10 my-5 sm:mx-60 sm:my-10">
        {children}
      </main>
      <Footer />
    </>
  );
}