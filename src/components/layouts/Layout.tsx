import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="bg-amber-50 flex flex-col min-h-screen">
        <Header />
        <main className="mx-4 md:mx-[200px] lg:mx-[300px] my-5 flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
